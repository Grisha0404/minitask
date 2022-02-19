import React from 'react';
import {FilterType} from "./App";
import {FullButtons} from "./FullButtons";

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
            <FullButtons name={'all students'} callBack={onClickAllHandler}/>
            <FullButtons name={'middle students'} callBack={onClickMiddleHandler}/>
            <FullButtons name={'old students'} callBack={onClickOldHandler}/>
            {/*<button onClick={onClickAllHandler}>all students</button>*/}
            {/*<button onClick= {onClickMiddleHandler}>middle students</button>
            <button onClick={onClickOldHandler}>old students</button>*/}
        </div>
    );
};

export default Buttons;