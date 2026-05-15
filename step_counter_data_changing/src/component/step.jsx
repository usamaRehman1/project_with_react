import { useSelector, useDispatch } from "react-redux";
import { stepInc, stepDec } from "../features/stepSlice";

const mainContainer = {
    display: 'flex',
    gap: '5px'
}

const Step = () => {
    const step = useSelector((state) => state.step.value)
    const dispatch = useDispatch()
    return (
        <div style={mainContainer}>
            <button onClick={() => dispatch(stepDec())}>-</button>
            <h4>Step: {step}</h4>
            <button onClick={() => dispatch(stepInc())}>+</button>
        </div>
    )
}

export default Step