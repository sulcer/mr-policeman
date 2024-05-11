import axios from "axios";

export const apiInstance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    timeout: 8000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        TimezoneOffset: -new Date().getTimezoneOffset() / 60,
    },
});

apiInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (__DEV__) console.log(error.response.data);
        return Promise.reject({ ...error, message: error.response.data.error });
    }
);