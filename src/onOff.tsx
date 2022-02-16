import React, {useState} from 'react';

type OnOffType = {}
const OnOff = (props: OnOffType) => {
    let [on, setOn] = useState(false)
    const onStyle = {
        border: '1px solid black',
        width: '40px',
        height: '30px',
        padding: '2px',
        marginLeft: '2px',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        padding: '2px',
        border: '1px solid black',
        width: '40px',
        height: '30px',
        marginLeft: '2px',
        display: 'inline-block',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        marginLeft: '5px',
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {setOn(true)}}>On</div>
            <div style={offStyle} onClick={() => {setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;