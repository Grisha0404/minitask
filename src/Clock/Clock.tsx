import React, {useEffect, useState} from 'react';
import s from './clock.module.css'


const nullCkock = (num: number) => num < 10 ? '0' + num : num;

export const Clock = () => {
    const [data, setData] = useState(new Date())
    const [digital, setDigital] = useState(true)

    useEffect(() => {
        const intervalClock = setInterval(() => {
            setData(new Date())
        }, 1000)

    }, [])

    const changeWatch = () => {
        setDigital(!digital)
    }

    return (
        <div>

            {digital  ?
                <span onClick={changeWatch}>
            <span>{nullCkock(data.getHours())}</span>
            :
            <span>{nullCkock(data.getMinutes())}</span>
            :
            <span>{nullCkock(data.getSeconds())}</span>
            </span>
                :
                <div className={s.clock} onClick={changeWatch}>
                    <div className={s.clockUi}>
                        <div className={s.hoursContainer}>
                        <div className={s.handHour}>{data.getHours()}</div>
                        </div>
                        <div className={s.minutesContainer}>
                        <div className={s.handMin}>{data.getMinutes()}</div>
                        </div>
                        <div className={s.secondsContainer}>
                        <div className={s.handSec}>{data.getSeconds()}</div>
                        </div>
                    </div>
                </div>}
            <span className={s.time} > { data.toDateString() } </span>
        </div>
    );
};
