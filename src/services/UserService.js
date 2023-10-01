import {ACCESS_TOKEN, API_BASE_URL} from "../constants";
import $api from "../http";

export default class UserService{
    static getCurrentUser(){
        if (!localStorage.getItem(ACCESS_TOKEN)){
            return Promise.reject("No access token set.");
        }

        return $api.get(API_BASE_URL + '/users/me')
    }

    static async getAll(){
        return await $api.get(API_BASE_URL + '/users')
    }

    static async getById(id){
        return await $api.get(API_BASE_URL + '/users/' + id)
    }

}