import { useState, useEffect } from "react"
import { indexInterview } from "../../../services/interviewServices"
import { Link } from "react-router-dom"



import styles from './IndexInterview.module.scss'

const IndexInterview = () => {


    const [interviews, setInterviews] = useState([])

    useEffect(() => {
        const fetchInterviews = async () => {
            try {
                const { data } = await indexInterview()
                setInterviews(data)


            } catch (e) {
                console.log(e)
            }
        }
        fetchInterviews()
    }, [])



    return (
        <>

            <h1>hello</h1>


            {interviews.map((e) => {
                return (
                    <Link key={e.id} to={`/jobinterview/${e.id}/`} >

                        {e.applying_role} at {e.company} on {new Date(e.date).toLocaleDateString()} @ {new Date(e.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}

                    </Link>

                )
            })}











        </>
    )
}


export default IndexInterview