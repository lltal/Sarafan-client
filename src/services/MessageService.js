import {API_BASE_URL} from "../constants";
import $api from "../http";

export default class MessageService{
    static async getAll(chatId){
        return await $api.get(API_BASE_URL + '/messages' + chatId)
    }

    static async getById(chatId, messageId){
        return await $api.get(API_BASE_URL + `/messages/${chatId}/${messageId}`)
    }

    static async postMessage({inputMessage}){
        return await $api.post(API_BASE_URL + '/messages', inputMessage)
    }

    static async putMessage({inputMessage}){
        return await $api.put(API_BASE_URL + '/messages/' + inputMessage.id, inputMessage)
    }

    static async deleteById(id){
        return await $api.delete(API_BASE_URL + '/messages/' + id)
    }
}