import React from 'react';

type NewComponentType = {
    students: StudentType[]
    topCars: TopCarsType[]
}
type StudentType = {
    id: number,
    name: string,
    age: number
}

type TopCarsType = {
    manufacturer: string,
    model: string
}
export const topCar = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'ml'},
    {manufacturer: 'Opel', model: 'cadet'}
]
export const NewComponent = (props: NewComponentType, index: number) => {

    const foo1 = () =>{
        console.log('100200')
    }
    const foo2 = (name:string) => {
        console.log(name)
    }

    return (
        <div>
            {/*<table>
                <tr>
                    <th>Info</th>
                    <th>Model</th>
                </tr>
                <tr>
                    <td>{props.topCars.map(s => <li key={index}>{s.manufacturer}</li>)}</td>
                    <td>{props.topCars.map(m => <li key={index}> {m.model}</li>)}</td>
                </tr>
            </table>
            <ul>
                {
                    props.students.map(s => <li key={s.id}>{s.name}-{s.age}</li>)
                }
            </ul>*/}
            <button onClick={foo1}>1</button>
            <button onClick={()=> foo2("100200")}>2</button>
        </div>
    );
};
