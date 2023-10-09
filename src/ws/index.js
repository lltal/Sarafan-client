import SockJS from "sockjs-client";
import { Stomp } from '@stomp/stompjs'
import {ACCESS_TOKEN} from "../constants";

var stompClient = null
var handlers = []

export function connect(chatId) {
    const socket = new SockJS('http://localhost:15000/guide-ws')
    stompClient = Stomp.over(socket)

    stompClient.connect({"chatId": chatId}, frame => {
        stompClient.subscribe('/topic/private', message => {
            console.log(message)
            handlers.forEach(handler => handler(message))
        })
    })
}

export function addHandler(handler) {
    handlers.push(handler)
}





