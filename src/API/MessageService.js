import axios from "axios";
import { API_BASE_URL } from "../constants";

export default class MessageService{
    static async getAll(){
        return await axios.get(API_BASE_URL + '/message')
    }

    static async getById(id){
        return await axios.get(API_BASE_URL + '/message/' + id)
    }

    static async postMessage({inputMessage}){
        return await axios.post(API_BASE_URL + '/message', inputMessage)
    }

    static async putMessage({inputMessage}){
        return await axios.put(API_BASE_URL + '/message/' + inputMessage.id, inputMessage)
    }

    static async deleteById(id){
        return await axios.delete(API_BASE_URL + '/message/' + id)
    }
}