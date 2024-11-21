import RenderPDF from "../../Components/PDFReader/PDFReader"
import FileUpload from "../../Components/FileUpload"

import styles from './CV.module.scss'

const CVPage = ({user}) => {


    return (
        <div className={styles.CVPage}>

        <h1>Your Current CV</h1>
        
        <RenderPDF file={user.cv}/>
        <FileUpload />

        
        
        <div className={styles.AI}>AI ATS PARAGRAPH</div>
        
        
        </div>
    )
}

export default CVPage