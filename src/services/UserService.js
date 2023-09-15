import { ACCESS_TOKEN, API_BASE_URL } from "../constants";
import $api from "../http";

export default class UserService{
    static getCurrentUser(){
        if (!localStorage.getItem(ACCESS_TOKEN)){
            return Promise.reject("No access token set.");
        }

        return $api.get(API_BASE_URL + '/user/me')
    }

    static async getAll(){
        const response = await $api.get(API_BASE_URL + '/users')
        return response
    }
}