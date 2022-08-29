
import { useState, useRef } from "react";

const StopWatch = () => {
    const [timer, setTimer] = useState(0);
    const [running, setRunning] = useState(false);

    const increment = useRef(null);

    const startStopHandler = () => {
        if(!running) {
            setRunning(true);
            increment.current = setInterval(()=> {
                setTimer(prev=> prev+1);
            }, 1)
        } else {
            stopHandler();
        }
    }

    const stopHandler = () => {
        console.log("Stop handler clicked")
        if(running) {
            setRunning(false);
            clearInterval(increment.current)
        }
    }

    const resetHandler = () => {
        setTimer(0)
    }


    return (<div>
        <button onClick={startStopHandler}>{running ?"Stop":"Start"}</button>
        {/* {<button disabled={!running} onClick={stopHandler}>Stop</button>} */}
        <button onClick={resetHandler}>Reset</button>
        <div>{timer}</div>
    </div>)

}

export default StopWatch;