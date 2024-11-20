import RenderPDF from "../../Components/PDFReader/PDFReader"

const CVPage = ({user}) => {


    return (
        <>
        <h1>CV Page</h1>
        
        
        
        
        
        <RenderPDF file={user.cv}/>
        
        
        
        
        
        
        </>
    )
}

export default CVPage