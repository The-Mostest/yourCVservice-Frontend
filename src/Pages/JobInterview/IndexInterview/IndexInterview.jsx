import { useState, useEffect } from "react"
import { indexInterview } from "../../../services/interviewServices"
import { Link } from "react-router-dom"
import { Carousel } from '@mantine/carousel';


import '@mantine/carousel/styles.css';




import '../../../Components/Embla/embla.css'
import '../../../Components/Embla/base.css'

import EmblaCarousel from "../../../Components/Embla/EmblaCarousel";

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

    const OPTIONS = { loop: true }


    return (
        <>



            <EmblaCarousel  options={OPTIONS} interviews={interviews}  setInterviews={setInterviews}  />




        </>
    )
}


export default IndexInterview