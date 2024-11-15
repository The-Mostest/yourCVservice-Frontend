import { useDisclosure } from '@mantine/hooks'
import { Burger } from '@mantine/core'
import { Link } from 'react-router-dom'


import styles from '../NavBar/NavBar.module.scss'

const NavBurger = () => {

    const [opened, { toggle }] = useDisclosure()

    return (
        <>
            <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" style={{zIndex: '999'}} />

            {opened && (
                <div style={{ position: 'fixed', zIndex: '998', width: '100%' }} className={styles.burger}>

                        <h3>
                            <img src="/images/logo.png" alt="Website Logo" />
                            < Link to='/' onClick={toggle}>User Home</Link>
                            < Link to='/signup' onClick={toggle}>signup</Link>
                            < Link to='/CV' onClick={toggle}>CV</Link>
                            < Link to='/signup' onClick={toggle}>signup</Link>
                            < Link to='/advice' onClick={toggle}>Advice On Interviews</Link>

                    </h3>

                </div>

            )}







        </>
    )
}

export default NavBurger