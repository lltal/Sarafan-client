import axios from "axios";

export default class MessageService{
    static async getAll(){
        return await axios.get('http://localhost:15000/message')
    }

    static async getById(id){
        return await axios.get('http://localhost:15000/message/' + id)
    }

    static async postMessage({inputMessage}){
        return await axios.post('http://localhost:15000/message', inputMessage)
    }

    static async putMessage({inputMessage}){
        return await axios.put('http://localhost:15000/message/' + inputMessage.id, inputMessage)
    }

    static async deleteById(id){
        return await axios.delete('http://localhost:15000/message/' + id)
    }
}