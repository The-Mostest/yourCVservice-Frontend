import NavBurger from "./NavBurger"

import { Link } from 'react-router-dom'

import styles from "../NavBar/NavBar.module.scss"



const NavBar = ({ user, handleSignOut }) => {


    return (
        <>


            <nav className={styles.mobile}>
                <NavBurger user={user} handleSignOut={handleSignOut} />
            </nav>

            <nav>
                <div className={styles.desktop}>
                    <img src="/images/logo.png" alt="Website Logo" />
                    < Link to='/'>Home</Link>
                    < Link to='/CV'>CV</Link>
                    < Link to='/advice'>Advice On Interviews</Link>

                    {user ? (
                        < Link to='/' onClick={handleSignOut}>Sign out</Link>

                        )
                        :
                        (
                            <>
                                < Link to='/signin'>signin</Link>
                                < Link to='/signup'>signup</Link>
                            </>
                        )
                    }

                </div>
            </nav>





        </>
    )
}

export default NavBar