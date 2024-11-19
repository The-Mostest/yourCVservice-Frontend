import axios from 'axios'

const fileUploadService = (file) => {
    return axios.postForm(import.meta.env.VITE_CLOUDINARY_UPLOAD_URL, {
        file: file,
        upload_preset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    })
}

export default fileUploadService