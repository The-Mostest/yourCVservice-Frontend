import { Modal } from "@mantine/core";
import { useState } from "react";

import SignUp from "../SignUp/SignUp";

const LandingPage = ({ setUser }) => {
    const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);

    return (
        <>
            <h1>Landing Page: User not Signed In</h1>

            <Modal
                opened={slowTransitionOpened}
                onClose={() => setSlowTransitionOpened(false)}
                transitionProps={{ transition: "scale" }}
                centered
                withCloseButton={false}
                overlayProps={{ backgroundOpacity: 0.6, blur: 2 }}
            >
                <img
                    src="/images/CloseIcon.png"
                    alt="Close Modal"
                    style={{
                        cursor: "pointer",
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        height: "25px",
                    }}
                    onClick={() => setSlowTransitionOpened(false)}
                />
                <SignUp setUser={setUser} close={() => setSlowTransitionOpened(false)} />
            </Modal>

            {/* Trigger Button */}
            <button onClick={() => setSlowTransitionOpened(true)}>Give it a try</button>
        </>
    );
};

export default LandingPage;
