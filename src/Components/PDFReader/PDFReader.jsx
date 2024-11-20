import { useState, useEffect } from "react";
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf';


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
        <>

            <Document file={file} onLoadSuccess={onDocumentLoadSuccess} >
                <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document> 



        </>
    )
}


export default RenderPDF