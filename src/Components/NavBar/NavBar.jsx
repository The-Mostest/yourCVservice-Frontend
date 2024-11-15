
import { useDisclosure } from '@mantine/hooks'
import { Burger } from '@mantine/core'


const NavBar = () => {

    const [opened, { toggle }] = useDisclosure()
    console.log(opened)


    return (
        <>


        
            <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" style={{position: 'fixed'}} />

            {opened && (
                <>

                    <img src="/images/logo.png" alt="Website Logo" style={{ width: "100px", height: "auto" }} />
                    <h1>Link</h1>
                    <h1>Link</h1>
                    <h1>Link</h1>
                    <h1>Link</h1>

                </>

            )}







        </>
    )
}

export default NavBar