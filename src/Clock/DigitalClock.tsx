import React from 'react';
import {ClockType} from "./AnalogClock";


export const DigitalClock: React.FC<ClockType> = ({date, changeWatch}) => {

    const nullCkock = (num: number) => num < 10 ? '0' + num : num;

    return (
        <span onClick={changeWatch}>
            <span>{nullCkock(date.getHours())}</span>
            :
            <span>{nullCkock(date.getMinutes())}</span>
            :
            <span>{nullCkock(date.getSeconds())}</span>
            </span>
    );
};
