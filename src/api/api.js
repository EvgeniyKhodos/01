import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "db915f77-fad8-471f-a793-2e1f1feea0ef"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get('users?page=${currentPage}&count=${pageSize}').then(response => {
            return response.data;
        });
    },
    getUsers2(currentPage = 1, pageSize = 10) {
        return instance.get('follow?page=${currentPage}&count=${pageSize}').then(response => {
            return response.data;
        });
    }
}