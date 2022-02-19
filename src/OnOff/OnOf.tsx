import React from 'react';

type UncontrolledOnOffType = {
    callBack: ()=> void
    value: boolean
}
const OnOff:React.FC<UncontrolledOnOffType> = ({ callBack, value }) => {

    const onStyle = {
        border: '1px solid black',
        width: '40px',
        height: '30px',
        padding: '2px',
        marginLeft: '2px',
        display: 'inline-block',
        backgroundColor: value ? 'green' : 'white'
    }
    const offStyle = {
        padding: '2px',
        border: '1px solid black',
        width: '40px',
        height: '30px',
        marginLeft: '2px',
        display: 'inline-block',
        backgroundColor: value ? 'white' : 'red'
    }
    const indicatorStyle = {
        marginLeft: '5px',
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: value ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={callBack}>On</div>
            <div style={offStyle} onClick={callBack}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;