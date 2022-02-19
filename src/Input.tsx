import React, {ChangeEvent, useState, KeyboardEvent} from 'react';

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
            <button onClick={onClickHandler}>add
            </button>
        </h2>
    );
};

export default Input;