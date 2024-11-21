import { useState, useEffect } from "react";
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf';
import styles from './PDFRender.module.scss'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const RenderPDF = ({file}) => {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);




    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    

    return (
        <div className={styles.CV}>
            {file ? 
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess} >
                <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document> 
        :
        <h1>Upload your CV here</h1>    
        }



        </div>
    )
}


export default RenderPDF