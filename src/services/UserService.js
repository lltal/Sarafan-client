import $api from "../http";

export default class UserService{
    static async getUserFromToken(){
        return await $api.get('http://localhost:15000/user/me')
    }
}