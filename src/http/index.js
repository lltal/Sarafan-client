import axios from "axios";
import {ACCESS_TOKEN} from "../constants";

export const API_URL = `http://localhost:15000`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
    return config
})

export default $api