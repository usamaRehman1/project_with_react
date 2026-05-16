import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { reset } from "../features/rangeSelectorSlice.js";

const MessageOfDate = () => {
    const rangeVal = useSelector((state) => state.range.rangeValue);
    const dispatch = useDispatch();

    const [date, setDate] = useState(new Date())
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const months = ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    useEffect(() => {
        const nextDay = new Date()
        nextDay.setDate(date.getDate() + rangeVal)
        setDate(nextDay)
    }, [rangeVal])


    return (
        <div>
            {
                rangeVal == 0 ? <h4>Today is {days[date.getDay()]} {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}.</h4> :
                    <h4>
                        {rangeVal} day{rangeVal != 1 ? 's' : ''} from today is{" "}
                        {days[date.getDay()]} {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}.
                    </h4>
            }
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )

}

export default MessageOfDate