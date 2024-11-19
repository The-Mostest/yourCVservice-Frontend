import { useState, useEffect } from "react"
import { indexInterview } from "../../../services/interviewServices"
import { Link } from "react-router-dom"


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
    }, [interviews])


    return (
        <>

            {interviews.map((e) => {
                return (
                    <Link key={e.id} to={`/jobinterview/${e.id}/`} >
                        <li >
                            {e.applying_role} at {e.company} on {new Date(e.date).toLocaleDateString()} @ {new Date(e.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </li>
                    </Link>
                )
            }
            )
            }











        </>
    )
}


export default IndexInterview