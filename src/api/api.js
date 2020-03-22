import * as axios from "axios";

let baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
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
    deleteUsers(deleteUser = 1) {
        return instance.delete('follow/${delete.User}').then(response => {
            return response.data;
        });
    }
}

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(baseURL + 'follow?page=${currentPage}&count=${pageSize}').then(response => {
        return response.data;
    });
}