import React, {useState} from 'react';
import {Buttons} from "./Buttons";

export const Counter = () => {

    let [number, setNumber] = useState<number>(0)

    const clickPlus = () =>{
        setNumber(++number)
    }
    const clickMin = () => {
        setNumber(--number)

    }
    const clickReset = () =>{
        setNumber(0)
    }

    return (
        <div>
            {number}
            <Buttons clickPlus={clickPlus} clickMin={clickMin} clickReset={clickReset}/>
        </div>
    );
};
