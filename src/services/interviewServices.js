import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/job-interviews`

//* Create
export const createInterview = (formData) => {
    return axios.post(BASE_URL, formData)
}

//* Index
export const indexInterview = () => {
    return axios.get(BASE_URL)
}

//* Show
export const showInterview = (interviewId) => {
    return axios.get(`${BASE_URL}/${interviewId}`)
}

//* Update
export const updateInterview = (interviewId, formData) => {
    return axios.put(`${BASE_URL}/${interviewId}`, formData)
}

//* Delete
export const deleteInterview = (interviewId) => {
    return axios.delete(`${BASE_URL}/${interviewId}`)
}

