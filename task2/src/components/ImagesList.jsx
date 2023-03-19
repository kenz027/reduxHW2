import { useSelector } from "react-redux"
export default function ImagesList(){
    const images = useSelector(state=>state.imagesSlice.images);
    return (
        <ul>
            {images.map(src=>(
                <li key={self.crypto.randomUUID()}>
                    <img src={src} />
                </li>
            ))}
        </ul>
    )
}