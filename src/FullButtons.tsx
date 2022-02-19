import React from 'react';

type FullButtonsType = {
    name: string
    callBack: () => void
}

export const FullButtons: React.FC<FullButtonsType> = ({name, callBack}) => {

    const onClickCallBack = () => {
        callBack()
    }

    return (
        <button onClick={onClickCallBack}>{name}</button>
    );
};
