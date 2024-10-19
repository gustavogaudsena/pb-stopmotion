import { useState } from "react"

export default function Image({className, src}) {

    const [imgSrc, setImgSrc] = useState(src)

    const handleImageError = (e) => {
        setImgSrc('https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk=')
    }
    return <img
        className={className}
        src={imgSrc}
        onError={handleImageError}
    />
}