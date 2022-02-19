import React from 'react';

type AccordionTitleType={
    title: string
    onClick: ()=>void
}

export const AccordionTitle:React.FC<AccordionTitleType> = ({title, onClick}) => {
    return (
        <h3 onClick={onClick}>{title}</h3>
    );
};
