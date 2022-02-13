import React, {ChangeEvent, useState} from 'react';
import {TopCarsType} from "./App";

type TopCars = {
    topCars: TopCarsType[]
    addNewCars: (cars: string) => void
}

const TopCars = (props: TopCars) => {

    let [cars, setCars] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCars(event.currentTarget.value)
    }
    const onClickHandler = () => {
        props.addNewCars(cars)
        setCars('')
    }

    return (
        <div>
            <div>
                <input value={cars} onChange={onChangeHandler}/>
                <button onClick={onClickHandler}>add new car</button>
            </div>
            <table>
                <tr>
                    <th>Info</th>
                    <th>Model</th>
                </tr>
                <tr>
                    <td>{props.topCars.map((s, index) => <li key={index}>
                        <span>{s.manufacturer}</span> - <span>{s.model}</span></li>)}
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default TopCars;