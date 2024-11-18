import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

import AddInterview from "../JobInterview/AddInterview/AddInterView"

const Homepage = () => {
    const [opened, { open, close }] = useDisclosure(false);




    return (
        <>
            <h1>Homepage: User Signed In</h1>

            <Modal
                opened={opened}
                onClose={close}
                withCloseButton={true}
                centered
                title={<h1>Job Interview Form</h1>}

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
                    }} />
                <AddInterview close={close}/>
            </Modal>
            <Button onClick={open}>Open centered Modal</Button>









        </>
    )
}

export default Homepage