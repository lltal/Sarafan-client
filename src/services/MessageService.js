import {API_BASE_URL} from "../constants";
import $api from "../http";

export default class MessageService{

    static async getAll(chatId){
        return await $api.get(API_BASE_URL + `/chats/${chatId}/messages`)
    }

    static async getById(chatId, messageId){
        return await $api.get(API_BASE_URL + `/chats/${chatId}/messages/${messageId}`)
    }

    static async postMessage(chatId, inputMessage){
        return await $api.post(API_BASE_URL + `/chats/${chatId}/messages/${inputMessage.id}`, inputMessage)
    }

    static async putMessage(chatId, inputMessage){
        return await $api.put(API_BASE_URL + `/chats/${chatId}/messages/${inputMessage.id}`, inputMessage)
    }

    static async deleteById(chatId, messageId){
        return await $api.delete(API_BASE_URL + `/chats/${chatId}/messages/` + messageId)
    }
}