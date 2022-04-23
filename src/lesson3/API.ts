import axios from 'axios';
import {FilmsType} from "./Lesson3";
import {SetStateAction} from "react";

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '995f97b1';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        const query = `/?apikey=${key}&s=${title}`;
        return axiosInstance.get<{}, TestType<ResponseType>>(query);
        //return axiosInstance.get(query).then(res => res.data);
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};

type TestType<T> = {
    data: T
}

export type ResponseType = {
    Search: Array<FilmsType>;
    Error: SetStateAction<FilmsType[] | undefined>;
    Response: string;
}


export default API;
