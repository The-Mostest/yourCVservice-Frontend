import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

import AddInterview from "../JobInterview/AddInterview/AddInterView"
import IndexInterview from '../JobInterview/IndexInterview/IndexInterview';

const Homepage = ({user}) => {
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
            <Button onClick={open}>Add an Interview</Button>

            <IndexInterview user={user}/>






        </>
    )
}

export default Homepage