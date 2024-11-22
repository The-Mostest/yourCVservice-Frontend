import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

import AddInterview from "../JobInterview/AddInterview/AddInterView"
import IndexInterview from '../JobInterview/IndexInterview/IndexInterview';
import styles from './Homepage.module.scss'
import CalendarBox from '../../Components/calender';

const Homepage = ({ user }) => {
    const [opened, { open, close }] = useDisclosure(false);




    return (
        <div className={styles.homepage}>
            <Modal
                opened={opened}
                onClose={close}
                withCloseButton={true}
                centered
                title={false}
                classNames={{
                    modal: styles.modal, // Apply the CSS class to the modal container
                }}
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
                <AddInterview close={close} />
            </Modal>




            <h1> Lets get this bread!</h1>

            <h3>Here is you upcoming Interview __________</h3>

            <div><CalendarBox user={user} /></div>


            <div className={styles.index}>
                <h3> Here is a rotation of all your upcoming interviews</h3>
                <IndexInterview user={user} />
                <Button onClick={open} className={styles.addInterviewButton}>Add an Interview</Button>
            </div>







        </div>
    )
}

export default Homepage