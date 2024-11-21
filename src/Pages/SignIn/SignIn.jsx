

import { useState } from "react"
import { signin } from "../../services/userService"
import { useNavigate } from "react-router-dom"

import styles from './SignIn.module.scss'




const SignIn = ({ setUser, close }) => {
    const [error, setError] = useState({})


    const [formData, setFormData] = useState({
        username_or_email: '',
        password: '',
    })

    const navigate = useNavigate()


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        close()

        try {
            const { user } = await signin(formData)
            setUser(user)
            navigate('/')
        } catch (error) {
            console.log(error)
            setError({ errorMessage: 'Sign In Failed, Please Try Again' })
        }
    }




    return (
        <div className={styles.signIn}>

            <img src="/images/logo.png" alt="Website Logo" />
            <h1> Sign In </h1>

            {error.errorMessage && <p style={{ color: "red" }}>{error.errorMessage}</p>}


            <form onSubmit={handleSubmit}>

                <label htmlFor="username_or_email" >Username: </label>
                <input type='text' name="username_or_email" placeholder="John Doe" value={formData.username_or_email} onChange={handleChange} />

                <br />

                <label htmlFor="password" >Password: </label>
                <input type='password' name="password" placeholder="password" value={formData.password} onChange={handleChange} />

                <br />

                <button>Sign In</button>
            </form>



        </div>
    )
}

export default SignIn