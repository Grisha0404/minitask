import React from 'react';
import {RatingValueType} from "./Raiting";

type StarType = {
    selected: boolean
    value: RatingValueType
    onClick: (value:RatingValueType)=>void
}

export const Star = (props:StarType) => {
    return <span onClick={()=> {props.onClick(props.value)}}>{!props.selected ? 'star ' : <b>star </b>}</span>
};
