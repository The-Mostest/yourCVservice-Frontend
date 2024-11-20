import { Modal, Button } from "@mantine/core";
import { useState } from "react";

import styles from '../LandingPage/LandingPage.module.scss'
import SignUp from "../SignUp/SignUp";

const LandingPage = ({ setUser }) => {
    const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);

    return (
        <>
            <Button onClick={() => setSlowTransitionOpened(true)} className={styles.signInButton} >GIVE IT A TRY</Button>
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

            <div className={styles.HeaderText}>
                <h1>Make your Job Hunt</h1>
                <h1>So Much Easier</h1>
            </div>


            <div className={styles.whatWeDo}>

                <img src="../../public/images/office.webp" id={styles.officeSpace} />

                <div>

                    <div className={styles.boxCollection}>
                        <div className={styles.boxes}>
                            <h2>Track Your Job Search Journey</h2>
                            <p>
                                Easily track your job applications and interviews. Record key details like dates, times, and interviewer names in one organized platform to stay on top of your progress.
                            </p>
                        </div>

                        <div className={styles.boxes}>
                            <h2>Organize Your Career Aspirations</h2>
                            <p>
                                Clarify your career goals and define the roles and industries you’re most passionate about. Our platform provides tools to help you refine your preferences and align your job search strategy with your long-term ambitions.
                            </p>
                        </div>

                        <div className={styles.boxes}>
                            <h2>Expert Advice to Ace Every Interview</h2>
                            <p>
                                Prepare for interviews with tailored advice, sample questions, and proven best practices. Gain the confidence and skills to leave a strong impression and excel in even the most challenging interview situations.
                            </p>
                        </div>

                        <div className={styles.boxes}>
                            <h2>Empowering You to Get Hired</h2>
                            <p>
                                We streamline your job search with powerful tools and actionable insights, helping you stay focused, stand out, and secure the role that matches your ambitions and skills faster.
                            </p>
                        </div>
                    </div>
                </div>



            </div>

            <img src="../../public/images/handshake.jpg" />


        </>
    );
};

export default LandingPage;
