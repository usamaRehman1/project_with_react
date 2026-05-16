import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, setRangeValue } from "../features/rangeSelectorSlice";

const CounterWithRange = () => {
    const rangeVal = useSelector((state) => state.range.rangeValue)
    const dispatch = useDispatch();

    const btns = {
        padding:"1px 10px"
    }

    return (
        <div>
            <button style={btns} onClick={() => dispatch(decrement())}>-</button>
            <input type="text" value={rangeVal} onChange={(e) => dispatch(setRangeValue(Number(e.target.value)))} />
            <button style={btns} onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}

export default CounterWithRange