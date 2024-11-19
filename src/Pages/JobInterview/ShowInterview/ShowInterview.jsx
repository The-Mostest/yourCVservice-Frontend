import UpdateInterview from "../UpdateInterview/UpdateInterview"
import { deleteInterview, showInterview } from "../../../services/interviewServices"

import { useDisclosure } from "@mantine/hooks"
import { Modal } from "@mantine/core"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"


const ShowInterview = () => {
    const [interview, setInterview] = useState({})
    const [opened, { open, close }] = useDisclosure(false);


    const { jobId } = useParams()
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
    }, [jobId])


    const handleDelete = async () => {
        try {
            await deleteInterview(jobId)
            nav('/')
        } catch (e) {
            console.log(e)
        }
    }


    const formattedDate = new Date(interview.date).toLocaleDateString();
    const formattedTime = new Date(interview.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    return (
        <>
            <button onClick={handleDelete}>Delete Interview</button>
            <Modal opened={opened} onClose={close} centered withCloseButton={true} title={<h1>Sign Up </h1>} overlayProps={{ backgroundOpacity: 0.6, blur: 2, }}>
                <UpdateInterview interview={interview} setInterview={setInterview} close={close}/>
            </Modal>
            <button onClick={open}>update</button>

            <h1>{interview.company}</h1>
            <h1>{interview.applying_role}</h1>
            <h1>{formattedDate}</h1>
            <h1>{formattedTime}</h1>










        </>
    )
}

export default ShowInterview