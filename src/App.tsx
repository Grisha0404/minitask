import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {Rating, RatingValueType} from './Raiting/Raiting';

import {LocalStorage} from "./LocalStorage/LocalStorage";
import {ItemsType, SuperSelected} from "./Selected/SuperSelected";
import {UncontrolledAccordion} from "./Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Raiting/UncontrolledRating";
import UncontrolledOnOff from "./OnOff/UncontrolledonOff";
import {NewComponent} from "./NewComponent";
import {Accordion} from "./Accordion/Accordion";
import OnOff from "./OnOff/OnOf";
import {Counter} from "./Caunter/Caunter";
import {Clock} from "./Clock/Clock";
import Lesson3 from "./lesson3/Lesson3";


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


const [valueSelect, setValueSelect] = useState('1')
    const changeSelect = (value: string) => {
        setValueSelect(value)
    }
    const citySelect:ItemsType[] = [
        {title: 'Минская', id: '1'},
        {title: 'Гомельская', id: '2'},
        {title: 'Витебская', id: '3'},
        {title: 'Брестская', id: '4'},
        {title: 'Гродненская', id: '5'},
        {title: 'Могилевская', id: '6'}
    ]
    const SuperSelectMemo = React.memo(SuperSelected)
    const LocalStorageMemo = React.memo(LocalStorage)
    const CounterMemo = React.memo(Counter)
    const RatingMemo = React.memo(Rating)
    const UncontrolledRatingMemo = React.memo(UncontrolledRating)
    const UncontrolledAccordionMemo = React.memo(UncontrolledAccordion)
    const AccordionMemo = React.memo(Accordion)
    const OnOffMemo = React.memo(OnOff)
    const UncontrolledOnOffMemo = React.memo(UncontrolledOnOff)
    const NewComponentMemo = React.memo(NewComponent)
    return (
        <div>
            {/*<SuperSelectMemo value={valueSelect} onChange={changeSelect} title={citySelect}/>*/}
            {/*<LocalStorageMemo/>*/}
            {/*<CounterMemo/>*/}
            {/*<RatingMemo value={value} onClick={setValue}/>*/}
            {/*<UncontrolledRatingMemo/>*/}
            {/*<UncontrolledAccordionMemo/>*/}
            {/*<AccordionMemo title={'=Menu='} callBack={callBackAccordionHandler} collapsed={collapsed}/>*/}
            {/*<OnOffMemo value={on} callBack={callBackOnOffHandler}/>*/}
            {/*<UncontrolledOnOffMemo/>*/}
            {/*<NewComponentMemo students={filterStudents()} removeStudents={removeStudents}*/}
            {/*              changeStudents={changeStudents} addNewStudent={addNewStudent}*/}
            {/*              topCars={topCar} addNewCars={addNewCars}/>*/}
            {/*<Clock/>*/}
            <Lesson3/>
        </div>
    );
}

export default App;
