// import UpdateInterview from "../UpdateInterview/UpdateInterview"
import { deleteInterview, showInterview } from "../../../services/interviewServices"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"


const ShowInterview = () => {
const [interview, setInterview] = useState([3])


const {jobId} = useParams()
const nav = useNavigate()


    useEffect(() => {
        const fetchInterviews = async () => {
            try {
                const { data } = await showInterview(jobId)
                setInterview(data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchInterviews()
    }, [])


    const handleDelete = async() => {
        try{
            await deleteInterview(jobId)
            nav('/')
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <>
        <button onClick={handleDelete}>Delete Interview</button>

        {/* <UpdateInterview /> */}
        <h1>{interview.applying_role}</h1>
        
        
        
        
        
        
        
        
        
        
        </>
    )
}

export default ShowInterview