import React from 'react';
import {FilterType} from "./App";

type ButtonsType= {
    changeStudents:(filter: FilterType) => void
}

const Buttons = (props:ButtonsType) => {
    const onClickMiddleHandler = ()=> {
        props.changeStudents('middle')
    }
    const onClickAllHandler = ()=> {
        props.changeStudents('all')
    }
    const onClickOldHandler = ()=> {
        props.changeStudents('old')
    }
    return (
        <div>
            <button onClick={onClickAllHandler}>all students</button>
            <button onClick= {onClickMiddleHandler}>middle students</button>
            <button onClick={onClickOldHandler}>old students</button>
        </div>
    );
};

export default Buttons;