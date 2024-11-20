import { useState } from "react"

import { createInterview } from "../../../services/interviewServices";
import { useNavigate } from "react-router-dom";



const AddInterview = ({ close }) => {
    const [error, setError] = useState({})

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

    const reset = {
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
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await createInterview(formData)
            setFormData(reset)
            close()
            nav('/')
        } catch (error) {
            console.log(error)
            setError({ errorMessage: 'Cannot Add Interview' })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }


    return (
        <>
            {/* <h1>Job Interview Form</h1> */}
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

                <button>Submit</button>
            </form>

        </>
    )
}

export default AddInterview