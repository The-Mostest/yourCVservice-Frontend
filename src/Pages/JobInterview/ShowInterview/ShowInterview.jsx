import UpdateInterview from "../UpdateInterview/UpdateInterview"
import { deleteInterview, showInterview } from "../../../services/interviewServices"

import { useDisclosure } from "@mantine/hooks"
import { Modal, Button } from "@mantine/core"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import styles from './ShowInterview.module.scss'


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
        <div className={styles.homepage}>
            <Modal opened={opened} onClose={close} centered withCloseButton={true} title={<h1>Sign Up </h1>} overlayProps={{ backgroundOpacity: 0.6, blur: 2, }}>
                <UpdateInterview interview={interview} setInterview={setInterview} close={close} />
            </Modal>




            <div className={styles.header}>
                <div className={styles.headerText}>
                    <h1>{interview.applying_role}</h1>
                    <h5>{interview.company}</h5>
                </div>
                <Button onClick={open}>Update Interview</Button>
            </div>

            <div className={styles.headerContent}>


                <div className={styles.time}>
                    <h4> Date of Interview</h4>
                    <h2>{formattedDate} @ {formattedTime}</h2>
                </div>

                <div className={styles.interviewerName}>
                    <h4> Interviewer Name </h4>
                    <h2>{interview.interviewer_name}</h2>
                </div>

                <div className={styles.salary}>
                    <h4> Salary </h4>
                    <h2>£{interview.salary}</h2>
                </div>

            </div>


            <div className={styles.content}>

                <div className={styles.companyBackground}>
                    <h2> Company Background </h2>
                    <h5>{interview.company_description}</h5>
                </div>

                <div className={styles.jobDescription}>
                    <h2> Job Description </h2>
                    <h5>{interview.job_description}</h5>
                </div>

                <div className={styles.benefits}>
                    <h2> Benefits </h2>
                    <h5>{interview.benefits}</h5>
                </div>

                <div className={styles.notes}>
                    <h2> Notes </h2>
                    <h5>{interview.notes}</h5>
                </div>

                <div className={styles.map}>
                </div>
            </div>

                <Button onClick={handleDelete}>Delete Interview</Button>
        </div>
    )
}

export default ShowInterview