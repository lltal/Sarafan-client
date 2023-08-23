import axios from "axios";

export default class MessageService{
    static async getAll(){
        return await axios.get('http://localhost:15000/message')
    }

    static async getById(id){
        return await axios.get('http://localhost:15000/message' + id)
    }

    static async postMessage(...data){
        return await axios.post('http://localhost:15000/message', ...data)
    }
}