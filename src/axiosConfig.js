import axios from "axios";
import router from "./router";
import store from "./store"

axios.defaults.baseURL = "https://localhost:44305"
axios.interceptors.response.use(
    response => response,
    error => {
        if (!error.response) {
            router.push({name: "LoginPage"})
        }
        else if (error.response.status === 404) {
            router.push({name: "OverviewPage"})
        }
        else if (error.response.status === 401 || error.response.status === 403) {
            router.push({name: "LoginPage"})
        }
    }
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