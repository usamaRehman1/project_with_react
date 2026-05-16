import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRangeValue } from "../features/rangeSelectorSlice";

const RangeSelector = () => {
    const rangeVal = useSelector((state) => state.range.rangeValue)
    const dispatch = useDispatch()
    const handleChange = (e) => { dispatch(setRangeValue(Number(e.target.value))) }

    return (
        <div style={{
            display: "flex",
        }}>
            <input type="range" value={rangeVal} min={0} max={100} onChange={handleChange} />
            <h4>{rangeVal}</h4>
        </div>
    )
}

export default RangeSelector