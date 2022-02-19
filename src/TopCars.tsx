import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {TopCarsType} from "./App";
import {FullButtons} from "./FullButtons";

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
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickHandler()
        }
    }

    return (
        <div>
            <div>
                <input value={cars} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
                {/*<button onClick={onClickHandler}>add new car</button>*/}
                <FullButtons name={'add new car'} callBack={onClickHandler}/>
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