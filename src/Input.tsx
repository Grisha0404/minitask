import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FullButtons} from "./FullButtons";


type InputType = {
    addNewStudent: (newStudent: string) => void
}

const Input = (props: InputType) => {
    let [newStudent, setNewStudent] = useState("")

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewStudent(event.currentTarget.value)
    }
    const onClickHandler = () => {
        props.addNewStudent(newStudent)
        setNewStudent('')
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onClickHandler()
        }
    }

    return (
        <h2>
            <input value={newStudent} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            <FullButtons name={'add'} callBack={onClickHandler}/>
        </h2>
    );
};

export default Input;