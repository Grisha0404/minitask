import React from 'react';
import {AccordionBody} from "./AccordionBody";
import {AccordionTitle} from "./AccordionTitle";

type AccordionType={
    title:string
    callBack: ()=> void
    collapsed: boolean
}

export const Accordion:React.FC<AccordionType> = ({title, callBack, collapsed}) => {

    return (
        <div>
            <AccordionTitle title={title} onClick={callBack}/>
            { !collapsed && <AccordionBody/>}
        </div>
    );
};
