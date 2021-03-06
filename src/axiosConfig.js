import axios from "axios";
import store from "./store"

axios.defaults.baseURL = "https://localhost:44305/"
axios.interceptors.response.use(
    response => response,
)

axios.interceptors.request.use(
    request => {
        const token = store.getters.token
        if (token) {
            request.headers.Authorization = `Bearer ${token}`
        }
        return request
    },
    error => Promise.reject(error)
)


export default {}