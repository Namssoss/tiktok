//Closure
//Timers: setInterval, setTimeout, clearInterval, clearTimeout
import { useState } from "react";
import { useEffect } from "react";

function Timer() {
    const [countdown, setCountdown] = useState(180)

    useEffect(() => {
        setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)
    }, [])

    return(
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}



export default Timer