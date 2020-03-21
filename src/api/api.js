import * as axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create(
    {
        withCredentials: true,
        headers: {
            "API-KEY": "db915f77-fad8-471f-a793-2e1f1feea0ef"
        }
);

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(baseUrl + 'users?page=${currentPage}&count=${pageSize}').then(response => {
        return response.data;
    });
}

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(baseUrl + 'follow?page=${currentPage}&count=${pageSize}').then(response => {
        return response.data;
    });
}