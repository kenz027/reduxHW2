
import { useDispatch, useSelector } from 'react-redux';
import { changeCount } from '../redux/countSlice';
export default function Form() {
  const count = useSelector(state=>state.countSlice.count);
  const dispatch = useDispatch();
  return (
    <form>
      <input
        name="count"
        type="number"
        max="5"
        min="1"
        step="1"
        value={count}
        onChange={e=>dispatch(changeCount(e.target.value))}
      />
    </form>
  );
}
