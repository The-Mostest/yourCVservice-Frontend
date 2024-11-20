import { Link } from 'react-router-dom'
import { useDisclosure } from "@mantine/hooks"
import { Modal } from "@mantine/core"


import NavBurger from "./NavBurger"
import styles from "../NavBar/NavBar.module.scss"
import SignIn from '../../Pages/SignIn/SignIn'



const NavBar = ({ user, handleSignOut, setUser }) => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>


            <nav className={styles.mobile}>
                <NavBurger user={user} handleSignOut={handleSignOut} />
            </nav>

            <nav>
                <div className={styles.desktop}>
                    <img src="/images/logo.png" alt="Website Logo" />
                    < Link to='/'>Home</Link>
                    < Link to='/advice'>Advice On Interviews</Link>

                    {user ? (
                        <>
                            < Link to='/CV'>CV</Link>
                            < Link to='/' onClick={handleSignOut}>Sign out</Link>
                        </>

                    )
                        :
                        (
                            <>
                                <Modal opened={opened} onClose={close} centered withCloseButton={true} title={<h1>Sign Up </h1>} overlayProps={{ backgroundOpacity: 0.6, blur: 2, }}>
                                    <SignIn setUser={setUser} close={close} />
                                </Modal>
                                < Link onClick={open} >sign in</Link>
                            </>
                        )
                    }

                </div>
            </nav>





        </>
    )
}

export default NavBar