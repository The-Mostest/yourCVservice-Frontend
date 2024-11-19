import fileUploadService from '../services/fileUpload'

const FileUpload = ({  setFileUpload, setFormData, formData, name}) => {

    const handleFile = async(e) => {
        setFileUpload(true)
        try {

            const file = e.target.files[0]
            if (!file) {
                console.error("No file selected");
                setFileUpload(false);
                return;
            }

            const { data } = await fileUploadService(file)
            setFormData({...formData, [name]: data.secure_url})
            setFileUpload(false)

        } catch (error) {
            console.log(error)
            console.log('Handle File isn\t working')
            setFileUpload(false)

        }
    }

    return (
        <>
        
        <input type='file' name='cv' accept='.pdf' onChange={handleFile} />
        

        </>
    )
}

export default FileUpload