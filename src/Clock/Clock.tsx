import React, {useEffect, useState} from 'react';
import {AnalogClock} from "./AnalogClock";
import {DigitalClock} from "./DigitalClock";



export const Clock = () => {
    const [data, setData] = useState(new Date())
    const [digital, setDigital] = useState(true)

    useEffect(() => {
        const intervalClock = setInterval(() => {
            setData(new Date())
            return () => {
                clearInterval(intervalClock)
            }

        }, 1000)

    }, [])

    const changeWatch = () => {
        setDigital(!digital)
    }

    return (
        <div>

            {digital ?
                <DigitalClock date={data} changeWatch={changeWatch}/>
                :
                <AnalogClock date={data} changeWatch={changeWatch}/>
            }
        </div>
    );
};
