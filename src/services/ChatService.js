import $api from "../http";
import {API_BASE_URL} from "../constants";

export default class ChatService{

    static getAllChats(){
        return $api.get(API_BASE_URL + `/chats`)
    }

    static getById(chatId){
        return $api.get(API_BASE_URL + `/chats/${chatId}`)
    }

    static postChat(chat) {
        return $api.post(API_BASE_URL + '/chats', {...chat})
    }
}