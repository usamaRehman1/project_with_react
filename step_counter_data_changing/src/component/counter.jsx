import { useSelector, useDispatch } from "react-redux";
import { countInc, countDec } from "../features/counterSlice.js";

const mainContainer = {
    display: 'flex',
    gap: '5px'
}

const Counter = () => {
    const count = useSelector(
        (state) => state.count.value
    )
    const dispatch = useDispatch();

    return (
        <div style={mainContainer}>
            <button onClick={() => dispatch(countDec())}>-</button>
            <h4>Count: {count}</h4>
            <button onClick={() => dispatch(countInc())}>+</button>
        </div>
    )
}

export default Counter