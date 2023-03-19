import { useDispatch } from 'react-redux';
import { addImage } from '../redux/imageSlice';
export default function Form(){
    const dispatch = useDispatch();
    return (
        <form>
            <input type='file' name='image' onChange={e=>dispatch(addImage(URL.createObjectURL(e.target.files[0])))} />
        </form>
    )
}