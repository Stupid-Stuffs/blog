import { useState } from 'react'
import { storage } from '@/lib/firebase'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'

export default function UploadFile({ onFinish }) {
    const [imgUrl, setImgUrl] = useState(null)
    const [progresspercent, setProgresspercent] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        const file = e.target[0]?.files[0]
        if (!file) return
        const storageRef = ref(storage, `files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                setProgresspercent(progress)
            },
            (error) => {
                alert(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    onFinish(downloadURL)
                    setImgUrl(downloadURL)
                })
            }
        )
    }

    return (
        <div className="App">
            <form
                onSubmit={handleSubmit}
                className="form flex justify-between border border-gray-100 p-2"
            >
                <input type="file" />
                <button type="submit" className='px-2 bg-primary-200 rounded-md'>Upload</button>
            </form>
            {!imgUrl && (
                <div className="outerbar">
                    <div className="innerbar" style={{ width: `${progresspercent}%` }}>
                        <progress id="file" value={progresspercent} max="100">
                            {' '}
                            {progresspercent}%{' '}
                        </progress>
                    </div>
                </div>
            )}
        </div>
    )
}
