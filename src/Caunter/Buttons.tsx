import React from 'react';

type ButtonsType = {
    clickPlus: () => void
    clickMin: () => void
    clickReset: () => void
}

export const Buttons:React.FC<ButtonsType> = ({clickPlus, clickMin, clickReset}) => {
    return (
        <div>
            <button onClick={clickPlus}>+</button>
            <button onClick={clickMin}>-</button>
            <button onClick={clickReset}>reset</button>
        </div>
    );
};
