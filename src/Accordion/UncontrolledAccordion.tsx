import React, {useState} from 'react';
import {AccordionBody} from "./AccordionBody";
import {AccordionTitle} from "./AccordionTitle";



export const UncontrolledAccordion= () => {
    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={"--Menu--"} onClick={()=>{setCollapsed(!collapsed)}}/>
            { !collapsed && <AccordionBody/>}
        </div>
    );
};
