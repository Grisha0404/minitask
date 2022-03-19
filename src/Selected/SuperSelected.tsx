import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './select.module.css'


export type ItemsType = {
    title: string,
    id: string
}

type SuperSelectedType = {
    value: string,
    title: ItemsType[],
    onChange: (value: string) => void
}

export const SuperSelected = (props: SuperSelectedType) => {
    let [active, setActive] = useState(false)
    let [hoveredElement, setHoveredElement] = useState(props.value)
    useEffect(() => {
        setHoveredElement(props.value)
    }, [props.value])
    const selectedTitle = props.title.find(e => e.id === props.value)
    const clickedTitle = (value: string) => {
        props.onChange(value)
        setActive(false)
    }
    const hoveredItem = props.title.find(e => e.id === hoveredElement)
    const keyPressHandler = (e: KeyboardEvent<HTMLSpanElement>) => {
        if (e.key === "ArrowDown" || e.key === 'ArrowUp') {
            for (let i = 0; i <= props.title.length; i++) {
                if (props.title[i].id === hoveredElement) {
                    const pretendentElement = e.key === 'ArrowDown' ?
                        props.title[i + 1]
                        : props.title[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.id)
                        return;
                    }
                }
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            return setActive(false)
        }
    }

    return <div className={s.select}>
        <span className={s.main} onKeyUp={keyPressHandler} tabIndex={0}
              onClick={() => setActive(!active)}>{selectedTitle && selectedTitle.title}</span>
        {
            active ?
                <div className={s.items}>
                    {props.title.map(el => <div
                        onMouseEnter={() => setHoveredElement(el.id)}
                        className={s.item + '' + (hoveredItem === el ? '' : s.selected)}
                        key={el.id} onClick={() => clickedTitle(el.id)}>{el.title}</div>)}
                </div>
                : ''
        }
    </div>

};
