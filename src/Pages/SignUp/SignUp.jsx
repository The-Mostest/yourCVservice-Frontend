import { useState } from "react"
import { signup } from "../../services/userService"
import { useNavigate } from "react-router-dom"
import FileUpload from "../../Components/FileUpload"


const SignUp = ({ setUser, close }) => {
    const [error, setError] = useState({})
    const [fileUpload, setFileUpload] = useState(false)

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        cv: ''
    })

    const navigate = useNavigate()


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formData.password !== formData.password_confirmation) {
            setError({ errorMessage: 'Passwords Do Not Match' })
        }

        try {
            const user = await signup(formData)
            setUser(user)
            close()
            navigate('/')
        } catch (error) {
            console.log(error)
            setError({ errorMessage: 'Sign Up Failed, Please Try Again' })
        }
    }


    // const handleFileUpload = async (e) => {
    //     const file = e.target.files[0]

    //     if (!file) return

    //     cosnt data = new FormData()
    //     data.append('file', file)
    //     data.append('upload_preset', 'CVUploads')
    //     data.append('cloud_name', 'dvlpwr3ri')

    //     await fetch

    // }

    return (
        <>
            {/* <h1>Sign Up </h1> */}
            {error.errorMessage && <p style={{ color: "red" }}>{error.errorMessage}</p>}


            <form onSubmit={handleSubmit}>

                <label htmlFor="username" >Username: </label>
                <input type='text' name="username" placeholder="John Doe" value={formData.username} onChange={handleChange} />

                <br />

                <label htmlFor="email" >Email: </label>
                <input type='text' name="email" placeholder="JohnDoe@gmail.com" value={formData.email} onChange={handleChange} />

                <br />

                <label htmlFor="password" >Password: </label>
                <input type='password' name="password" placeholder="password" value={formData.password} onChange={handleChange} />

                <br />

                <label htmlFor="password_confirmation" >Confirm Password: </label>
                <input type='password' name="password_confirmation" placeholder="password" value={formData.password_confirmation} onChange={handleChange} />

                <br />

                <label htmlFor="cv">Upload CV: </label>
                <FileUpload fileUpload={fileUpload} setFileUpload={setFileUpload} setFormData={setFormData} formData={formData} name='cv'/>

                {/* <input
                    type="file"
                    name="CV"
                    accept=".pdf"
                    onChange={handleFile}
                /> */}

                <button>Sign Up</button>
            </form>











        </>
    )
}

export default SignUp