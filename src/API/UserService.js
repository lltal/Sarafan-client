import axios from "axios";

export default class UserService{
    static async getUserFromToken(){
        return await axios.get('http://localhost:15000/user/me')
    }
}