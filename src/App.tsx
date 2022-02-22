import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";
import {Accordion} from "./Accordion/Accordion";
import {UncontrolledAccordion} from './Accordion/UncontrolledAccordion';
import OnOff from "./OnOff/OnOf";
import UncontrolledOnOff from "./OnOff/UncontrolledonOff";
import {v1} from "uuid";
import {Rating, RatingValueType} from './Raiting/Raiting';
import {UncontrolledRating} from "./Raiting/UncontrolledRating";
import {Counter} from "./Caunter/Caunter";


export type StudentType = {
    id: string,
    name: string,
    age: number
}

export type TopCarsType = {
    manufacturer: string,
    model: string
}

export type FilterType = 'all' | 'middle' | 'old'


function App() {
    let [topCar, setTopCar] = useState([
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'ml'},
        {manufacturer: 'Opel', model: 'cadet'}
    ])
    let [students, setStudents] = useState([
        {id: v1(), name: "James", age: 8},
        {id: v1(), name: "Robert", age: 18},
        {id: v1(), name: "John", age: 28},
        {id: v1(), name: "Michael", age: 38},
        {id: v1(), name: "William", age: 48},
        {id: v1(), name: "David", age: 58},
        {id: v1(), name: "Richard", age: 68},
        {id: v1(), name: "Joseph", age: 78},
        {id: v1(), name: "Thomas", age: 88},
        {id: v1(), name: "Charles", age: 98},
        {id: v1(), name: "Christopher", age: 100},
    ])
    let [filter, setFilter] = useState('')
    const filterStudents = () => {
        if (filter === 'middle') {
            return students.filter(f => f.age >= 28 && f.age <= 58)
        } else if (filter === 'old') {
            return students.filter(f => f.age > 58)
        } else {
            return students
        }
    }
    const changeStudents = (filter: FilterType) => {
        setFilter(filter)
    }
    const addNewStudent = (newStudent: string) => {
        setStudents([{id: v1(), name: newStudent, age: students.length}, ...students])
    }
    const addNewCars = (cars: string) => {
        setTopCar([...topCar, {manufacturer: cars, model: 'm5'}])
    }
    const removeStudents = (id: string) => {
        setStudents(students.filter(f => f.id !== id))
    }

    let [value, setValue] = useState<RatingValueType>(0)
    let [on, setOn] = useState(false)
    let [collapsed, setCollapsed] = useState(false)
    const callBackAccordionHandler = () => {
        setCollapsed(!collapsed)
    }
    const callBackOnOffHandler = () => {
        setOn(!on)
    }

    return (
        <div>
            <Counter/>
            <Rating value={value} onClick={setValue}/>
            <UncontrolledRating/>
            <UncontrolledAccordion/>
            <Accordion title={'=Menu='} callBack={callBackAccordionHandler} collapsed={collapsed}/>
            <OnOff value={on} callBack={callBackOnOffHandler}/>
            <UncontrolledOnOff/>
            <NewComponent students={filterStudents()} removeStudents={removeStudents}
                          changeStudents={changeStudents} addNewStudent={addNewStudent}
                          topCars={topCar} addNewCars={addNewCars}/>
        </div>
    );
}

export default App;
