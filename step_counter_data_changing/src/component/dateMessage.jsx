import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DateMessage = () => {
    const [date, setDate] = useState(new Date());
    const count = useSelector((state) => state.count.value)
    const months = ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    useEffect(() => {
        const nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + count);
        // console.log(nextDate, "==> next Date")
        setDate(nextDate);
    }, [count]);

    return (
        <>
            {
                count === 0 ?
                    <h4>Today is {days[date.getDay()]} {months[date.getMonth()]} {date.getDate()} {date.getFullYear()}</h4> :
                    <h4>
                        {count} day{count !== 1 ? "s" : ""} from today is{" "}
                        {days[date.getDay()]}{" "}
                        {months[date.getMonth()]}{" "}
                        {date.getDate()}{" "}
                        {date.getFullYear()}
                    </h4>
            }
        </>
    )
}

export default DateMessage