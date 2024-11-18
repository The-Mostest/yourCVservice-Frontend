import axios from "axios"
import { setToken } from "../utils/auth"

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/auth`


export const signup = async (formData) => {
const {data} = await axios.post(`${BASE_URL}/signup`, formData)

if (data.token) {
    setToken(data.token)
}

return data
}

export const signin = async (formData) => {
    const {data} = await axios.post(`${BASE_URL}/signin`, formData)

    if (data.token) {
        setToken(data.token)
    }
    
    return data
}