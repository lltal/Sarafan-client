import SockJS from "sockjs-client";


export default class WS {

    constructor() {
        this.sto
    }


    function connect(){
        const socket = new SockJS('/private-messages')
        stompClient = SockJS.over(socket)
        stompClient.connect({}, frame => {
            console.log(frame)
            stompClient.subscribe('/app/topic', message => {
                handlers.forEach(handler => handler(message))
            })
        })
    }

}





