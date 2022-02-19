import React from 'react';
import {FilterType, StudentType, TopCarsType} from "./App";
import Buttons from "./Buttons";
import Input from "./Input";
import TopCars from "./TopCars";

type NewComponentType = {
    students: StudentType[]
    topCars: TopCarsType[]
    removeStudents: (id: string) => void
    changeStudents: (filter: FilterType) => void
    addNewStudent: (newStudent: string) => void
    addNewCars: (cars: string) => void
}


export const NewComponent = (props: NewComponentType) => {
    /* const foo1 = () => {
         console.log('100200')
     }
     const foo2 = (name: string) => {
         console.log(name)
     }*/
    const studentsHandler = props.students.map(s => <li key={s.id}><span>{s.name}</span> <span>{s.age}</span>
        <button onClick={() => props.removeStudents(s.id)}>x</button>
    </li>)

    return (
        <div>
            <TopCars topCars={props.topCars} addNewCars={props.addNewCars}/>
            <Input addNewStudent={props.addNewStudent}/>
            <ul>
                {studentsHandler}
            </ul>
            <Buttons changeStudents={props.changeStudents}/>
            {/*<button onClick={foo1}>1</button>
            <button onClick={() => foo2("100200")}>2</button>*/}
        </div>
    );
};
