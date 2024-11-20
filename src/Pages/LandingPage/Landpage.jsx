import { Modal, Button } from "@mantine/core";
import { useState } from "react";

import styles from '../LandingPage/LandingPage.module.scss'
import SignUp from "../SignUp/SignUp";

const LandingPage = ({ setUser }) => {
    const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);

    return (
        <>
            <img src="../../public/images/CorporateBuilding.jpg" className={styles.headerImage} />



            <Modal
                opened={slowTransitionOpened}
                onClose={() => setSlowTransitionOpened(false)}
                transitionProps={{ transition: "scale" }}
                centered
                title={<h1>Sign Up </h1>}
                withCloseButton={true}
                overlayProps={{ backgroundOpacity: 0.6, blur: 2 }}
            >
                <SignUp setUser={setUser} close={() => setSlowTransitionOpened(false)} />
            </Modal>

            <Button onClick={() => setSlowTransitionOpened(true)} className={styles.signInButton} >GIVE IT A TRY</Button>
            <div className={styles.HeaderText}>
                <h1>Make your Job Hunt</h1>
                <h1>So Much Easier</h1>
            </div>

            <img src="../../public/images/office.webp" />




            <h1> What We Do</h1>
            <img src="../../public/images/handshake.jpg" />

            <h2>Track Your Job Search Journey</h2>
            <p>
                Our platform provides an intuitive and organized way to track your job interviews and application progress. With our user-friendly interface,
                you can record crucial details like interview dates, times, locations, and interviewer names, ensuring you never miss a critical moment in your job search.
                Keep all your application data in one place, track statuses, and gain clarity on where you stand with every opportunity.

            </p>

            <h2>Organize Your Career Aspirations</h2>
            <p>
                We go beyond interview tracking by helping you map out your career goals and job interests.
                Whether you’re targeting specific industries, roles, or companies, our platform allows you to log and refine your preferences.
                Stay focused on your dream career with tailored insights that align with your ambitions, ensuring you invest time in the opportunities that matter most to you.
            </p>

            <h2>Expert Advice to Ace Every Interview</h2>
            <p>
                Get the support you need to shine in every interview. From personalized tips and industry-specific advice to mock interview questions and best practices,
                we equip you with the tools to leave a lasting impression. Our resources are designed to build confidence and prepare you for even the toughest interview scenarios,
                giving you an edge over the competition.
            </p>

            <h2>Empowering You to Get Hired</h2>
            <p>
                Our mission is simple: to help you land your dream job. By combining effective organization, actionable advice,
                and tailored career insights, we streamline the job-seeking process and set you up for success. Whether you're just starting
                your journey or seeking to take the next big leap, we’re here to support you every step of the way.
            </p>






        </>
    );
};

export default LandingPage;
