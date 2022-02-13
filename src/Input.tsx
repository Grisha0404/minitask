import React, {ChangeEvent, useState} from 'react';

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

    return (
        <h2>
            <input value={newStudent} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>add
            </button>
        </h2>
    );
};

export default Input;