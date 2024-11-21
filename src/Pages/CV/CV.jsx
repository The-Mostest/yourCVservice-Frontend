import RenderPDF from "../../Components/PDFReader/PDFReader"

import styles from './CV.module.scss'

const CVPage = ({user}) => {


    return (
        <>

        <h1>Your Current CV</h1>
        
        <RenderPDF file={user.cv}/>
        
        
        
        
        
        
        </>
    )
}

export default CVPage