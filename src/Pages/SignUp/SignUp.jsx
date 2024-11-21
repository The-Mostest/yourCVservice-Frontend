import { useState } from "react"
import { signup } from "../../services/userService"
import { useNavigate } from "react-router-dom"
import FileUpload from "../../Components/FileUpload"
import styles from './SignUp.module.scss'

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


    return (
        <div className={styles.signUp}>
            {/* <h1>Sign Up </h1> */}
            {error.errorMessage && <p style={{ color: "red" }}>{error.errorMessage}</p>}
            <img src="/images/logo.png" alt="Website Logo" />
            <h1> Sign Up</h1>


            <form onSubmit={handleSubmit}>


                <div className={styles.boxes}>
                    <label htmlFor="username" >Username: </label>
                    <input type='text' name="username" placeholder="John Doe" value={formData.username} onChange={handleChange} />
                </div>


                <div className={styles.boxes}>
                    <label htmlFor="email" >Email: </label>
                    <input type='text' name="email" placeholder="JohnDoe@gmail.com" value={formData.email} onChange={handleChange} />
                </div>


                <div className={styles.boxes}>
                    <label htmlFor="password" >Password: </label>
                    <input type='password' name="password" placeholder="password" value={formData.password} onChange={handleChange} />
                </div>


                <div className={styles.boxes}>
                    <label htmlFor="password_confirmation" >Confirm Password: </label>
                    <input type='password' name="password_confirmation" placeholder="password" value={formData.password_confirmation} onChange={handleChange} />
                </div>



                <div className={styles.boxes}>
                    <label htmlFor="cv">Upload CV: </label>
                    <FileUpload fileUpload={fileUpload} setFileUpload={setFileUpload} setFormData={setFormData} formData={formData} name='cv' />
                </div>


                <button className={styles.signUpButton}>Sign Up</button>
            </form>











        </div>
    )
}

export default SignUp