

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { showInterview, updateInterview } from "../../../services/interviewServices";



const UpdateInterview = ({ setInterview, close}) => {
    const [error, setError] = useState("")
    const { jobId } = useParams()

    const nav = useNavigate()

    const [formData, setFormData] = useState({
        company: '',
        company_description: '',
        applying_role: '',
        job_description: '',
        salary: '',
        interviewer_name: '',
        benefits: '',
        location_lat: '',
        location_long: '',
        notes: '',
        date: '',
    });

    useEffect(() => {
        const fetchInterview = async () => {
            try {
                const { data } = await showInterview(jobId)
                data.interviewee = data.interviewee.id
                setFormData({...data,  date: data.date.replace("Z", "")})
            } catch (e) {
                console.log(e)
                console.log('FetchInterview not working')
            }
        }
        if (jobId) fetchInterview()
    }, [jobId])



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await updateInterview(jobId, formData)
            setInterview(data)
            nav(`/jobinterview/${jobId}/`)
            close()
        } catch (error) {
            console.log(error)
            setError({ errorMessage: 'Cannot Update Interview' })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <>
            {error.errorMessage && <p style={{ color: "red" }}>{error.errorMessage}</p>}

            <form onSubmit={handleSubmit}>
                <label htmlFor="company">Company: </label>
                <input
                    type="text"
                    name="company"
                    placeholder="Enter company name"
                    value={formData.company}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="company_description">Company Description: </label>
                <textarea
                    name="company_description"
                    placeholder="Enter a description of the company"
                    value={formData.company_description}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="applying_role">Applying Role: </label>
                <input
                    type="text"
                    name="applying_role"
                    placeholder="Enter role you are applying for"
                    value={formData.applying_role}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="job_description">Job Description: </label>
                <textarea
                    name="job_description"
                    placeholder="Enter job description"
                    value={formData.job_description}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="salary">Salary: </label>
                <input
                    type="number"
                    name="salary"
                    placeholder="Enter expected salary"
                    value={formData.salary}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="interviewer_name">Interviewer Name: </label>
                <input
                    type="text"
                    name="interviewer_name"
                    placeholder="Enter interviewer's name"
                    value={formData.interviewer_name}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="benefits">Benefits: </label>
                <textarea
                    name="benefits"
                    placeholder="Enter job benefits"
                    value={formData.benefits}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="location">Location (Latitude and Longitude): </label>
                <input
                    type="text"
                    name="location_lat"
                    placeholder="Enter latitude"
                    value={formData.location_lat}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="location_long"
                    placeholder="Enter longitude"
                    value={formData.location_long}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="notes">Notes: </label>
                <textarea
                    name="notes"
                    placeholder="Enter additional notes"
                    value={formData.notes}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="date">Interview Date: </label>
                <input
                    type="datetime-local"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                />

                <br />

                <button type="submit">Update Job Interview</button>
            </form>













        </>
    )
}

export default UpdateInterview


