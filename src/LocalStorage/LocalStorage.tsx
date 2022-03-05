import React, {useEffect, useState} from 'react';

export const LocalStorage = () => {
    let [value, setValue] = useState(0)

    useEffect(()=>{
        let valueStr = localStorage.getItem('counter')
        if (valueStr){
            setValue(JSON.parse(valueStr))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('counter', JSON.stringify(value))
    }, [value])

    const onClickHandler=()=>{
        setValue(value+1)
    }
    /*const setLocalStorageHandler = () =>{
      localStorage.setItem('counter', JSON.stringify(value))
    }*/

    const getLocalStorageHandler = ()=>{
        let valueStr = localStorage.getItem('counter')
        if(valueStr){
            setValue(JSON.parse(valueStr))
        }
    }
    /*const clearLocalStorageHandler = () => {
      localStorage.clear()
    }*/
    /*const remLocalStorageHandler = () => {
        localStorage.removeItem('counter1')
    }*/

    return (
        <div>
            <div>{value}</div>
            <button onClick={onClickHandler}>inc</button>
        </div>
    );
};
