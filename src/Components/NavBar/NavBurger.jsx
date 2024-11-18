import { useDisclosure } from '@mantine/hooks'
import { Burger } from '@mantine/core'
import { Link } from 'react-router-dom'
import { Transition } from '@mantine/core'

import styles from '../NavBar/NavBar.module.scss'

const NavBurger = ({ user, handleSignOut }) => {

    const [opened, { toggle }] = useDisclosure()

    const closeAndClick = () => {
        handleSignOut()
        toggle()
    }

    return (
        <>
            <Burger
                opened={opened}
                onClick={toggle}
                aria-label="Toggle navigation"
                style={{ zIndex: '999' }}
            />

            <Transition
                mounted={opened}
                transition="fade-down"
                duration={100}
                timingFunction="ease"
            >
                {(transitionStyles) => (
                    <div
                        style={{
                            ...transitionStyles,
                            position: 'fixed',
                            zIndex: '998',
                            width: '100%',
                        }}
                        className={styles.burger}
                    >

                        <h3>
                            <img src="/images/logo.png" alt="Website Logo" />
                            < Link to='/' onClick={toggle}> Home    </Link>
                            < Link to='/CV' onClick={toggle}>   CV  </Link>
                            < Link to='/advice' onClick={toggle}>   Advice On Interviews    </Link>

                            {user ? (
                                < Link to='/' onClick={closeAndClick} >  Sign out    </Link>

                            )
                                :
                                (
                                    <>
                                        < Link to='/signin' onClick={toggle}>   Sign In  </Link>
                                        < Link to='/signup' onClick={toggle}>   Sign Up  </Link>
                                    </>
                                )
                            }
                        </h3>
                    </div>
                )}
            </Transition>
        </>
    );
};

export default NavBurger;