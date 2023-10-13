import SockJS from "sockjs-client";
import { Stomp } from '@stomp/stompjs'

var stompClient = null
var handlers = []

export function connect(chatId) {
    const socket = new SockJS('http://localhost:15000/guide-ws')
    stompClient = Stomp.over(socket)

    stompClient.connect({"chatId": chatId}, frame => {
        stompClient.subscribe('/topic/private-messages', message => {
            handlers.forEach(handler => handler(JSON.parse(message.body)))
        })
    })
}

export function addHandler(handler) {
    handlers.push(handler)
}