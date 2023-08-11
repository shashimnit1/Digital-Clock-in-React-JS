import React, { useState } from "react";
import "./DigClock.css";

const DigiClock = () => {
    const [cTime, uTime] = useState(new Date().toLocaleTimeString())

    const upTime = () => {
        uTime(new Date().toLocaleTimeString())
    }
    setInterval(upTime, 1000)

    return (
        <>
            <div className="body">
                <div className="display">
                    <text>{cTime}</text>
                    <h1>Digital Clock</h1>
                </div>
            </div>
        </>
    );
}
export default DigiClock;
