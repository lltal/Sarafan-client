import {API_BASE_URL} from "../constants";
import $api from "../http";

export default class MessageService{
    static async getAll(){
        return await $api.get(API_BASE_URL + '/message')
    }

    static async getById(id){
        return await $api.get(API_BASE_URL + '/message/' + id)
    }

    static async postMessage({inputMessage}){
        return await $api.post(API_BASE_URL + '/message', inputMessage)
    }

    static async putMessage({inputMessage}){
        return await $api.put(API_BASE_URL + '/message/' + inputMessage.id, inputMessage)
    }

    static async deleteById(id){
        return await $api.delete(API_BASE_URL + '/message/' + id)
    }
}