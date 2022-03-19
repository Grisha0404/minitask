import React, {useReducer, useState} from 'react';
import {AccordionBody} from "./AccordionBody";
import {AccordionTitle} from "./AccordionTitle";
import {reducer} from "./reducer";



export const UncontrolledAccordion= () => {
    let [state, dispatch] = useReducer(reducer, {collapsed:false})

    return (
        <div>
            <AccordionTitle title={"--Menu--"} onClick={()=>{dispatch({title:'Toggele'})}}/>
            { !state.collapsed && <AccordionBody/>}
        </div>
    );
};
