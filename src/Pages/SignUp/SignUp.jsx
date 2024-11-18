import { useState } from "react"
import { signup } from "../../services/userService"
import { useNavigate } from "react-router-dom"


const SignUp = ({setUser, close}) => {
const [error, setError] = useState({})


const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
})

const navigate = useNavigate()


const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
}

const handleSubmit = async (e) => {
    e.preventDefault()
    close()
    if (formData.password !== formData.password_confirmation) {
        setError({ errorMessage: 'Passwords Do Not Match'})
    }

    try {
        const user = await signup(formData) 
        setUser(user)
        navigate('/')
    } catch (error) {
        console.log(error)
        setError({ errorMessage : 'Sign Up Failed, Please Try Again' })
    }
}

    return (
        <>
        <h1>Sign Up </h1>
        {error.errorMessage && <p style={{ color: "red" }}>{error.errorMessage}</p>}

        
        <form onSubmit={handleSubmit}>

            <label htmlFor="username" >Username: </label>
            <input type='text' name="username" placeholder="John Doe" value={formData.username} onChange={handleChange} />

            <br/>

            <label htmlFor="email" >Email: </label>
            <input type='text' name="email" placeholder="JohnDoe@gmail.com" value={formData.email} onChange={handleChange} />

            <br/>

            <label htmlFor="password" >Password: </label>
            <input type='password' name="password" placeholder="password" value={formData.password} onChange={handleChange} />

            <br/>

            <label htmlFor="password_confirmation" >Confirm Password: </label>
            <input type='password' name="password_confirmation" placeholder="password" value={formData.password_confirmation} onChange={handleChange} />

            <br/>

            <button>Sign Up</button>
        </form>
        
        
        
        
        
        
        
        
        
        
        
        </>
    )
}

export default SignUp