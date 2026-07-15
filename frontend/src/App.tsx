import React, { useState, useRef, useEffect } from "react";
import logo from './assets/images/malongo.jpg';

const App = () => {
    const [timeMinutes, setTimeMinutes] = useState("00")
    const [timeHours,   setTimeHours  ] = useState("00")
    const [timeSeconds, setTimeSeconds ] = useState("00")

    const handleTimeMinutesChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        let minutes = e.target.value.replace(/\D/g, "")

        if (parseInt(minutes) > 59) {
            minutes = "59"
            e.target.value = "59"
        }

        minutes = minutes.padStart(2, "0")

        setTimeMinutes(minutes)
    }

    const handleTimeSecondsChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        let seconds = e.target.value.replace(/\D/g, "")

        if (parseInt(seconds) > 59) {
            seconds = "59"
            e.target.value = "59"
        }

        seconds = seconds.padStart(2, "0")

        setTimeSeconds(seconds)
    }

    const handleTimeHoursChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        let hours = e.target.value.replace(/\D/g, "")

        hours = hours.padStart(2, "0")

        setTimeHours(hours)
    }

    return (
        <div>
            <h1>MalongoBot</h1>
            <h3>Duração do vídeo</h3>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "5px" }}>
                <input name="hours" onChange={(e) => handleTimeHoursChange(e)} type="text" defaultValue={"00"} maxLength={2} style={{ width: "25px", textAlign: "center" }} />
                <span>:</span>
                <input name="minutes" onChange={(e) => handleTimeMinutesChange(e)} type="text" defaultValue={"00"} maxLength={2} style={{ width: "25px", textAlign: "center" }} />
                <span>:</span>
                <input name="seconds" onChange={(e) => handleTimeSecondsChange(e)} type="text" defaultValue={"00"} maxLength={2} style={{ width: "25px", textAlign: "center" }} />
            </div>
            <div style={{ marginTop: "50px" }}>
                <div>Timer</div>
                <span style={{ fontSize: "75px", fontWeight: "bolder" }}>{timeHours}</span>
                <span style={{ fontSize: "75px", fontWeight: "bolder" }}>:</span>
                <span style={{ fontSize: "75px", fontWeight: "bolder" }}>{timeMinutes}</span>
                <span style={{ fontSize: "75px", fontWeight: "bolder" }}>:</span>
                <span style={{ fontSize: "75px", fontWeight: "bolder" }}>{timeSeconds}</span>
            </div>
            <button name="start">Start</button>
            <br />
            <img style={{width: "160px"}} src={logo} alt="Channel Logo" />
        </div>
    );
};

export default App;