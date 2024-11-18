import axios from './interceptors'
import { setToken } from "../utils/auth"

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/users`


export const signup = async (formData) => {
const {data} = await axios.post(`${BASE_URL}/signup/`, formData)

if (data.access_token) {
    setToken(data.access_token)}

return data
}

export const signin = async (formData) => {
    const {data} = await axios.post(`${BASE_URL}/signin/`, formData)
    if (data.access_token) {
        setToken(data.access_token)
    }
    
    return data
}