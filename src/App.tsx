import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

export type StudentType = {
    id: number,
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
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
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
        setStudents([{id: 12, name: newStudent, age: 5}, ...students])
    }
    const addNewCars = (cars: string) => {
        setTopCar([...topCar, {manufacturer: cars, model: 'm5'}])
    }
    const removeStudents = (id: number) => {
        setStudents(students.filter(f => f.id !== id))
    }

    return (
        <div>
            <NewComponent students={filterStudents()} removeStudents={removeStudents}
                          changeStudents={changeStudents} addNewStudent={addNewStudent}
                          topCars={topCar} addNewCars={addNewCars}/>
        </div>
    );
}

export default App;
