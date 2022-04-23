import React, {useState} from 'react';
import {FilmsType} from "./Lesson3";
import style from './films.module.css'


const Films: React.FC<FilmsType> = ({
                                        id,
                                        Title,
                                        Type,
                                        Poster
                                    }) => {
    const [info, setInfo] = useState(true)

    return (
        <div onClick={() => setInfo(!info)}>
            {
                info ?
                    <div className={style.filmInfo}>
                    <span>
                        <img src={Poster} alt={'POSTER'} style={{width: '70px', height: '90px'}}/>
                        <div>{Title}</div>
                    </span>
                    </div>
                    :
                    <span onClick={() => setInfo(!info)}>
                        <img src={Poster} alt={'POSTER'}/>
                        <div style={{textAlign: "center"}}>
                        <div>{Title}</div>
                        <p>{Type}</p>
                        </div>
                    </span>
            }

        </div>
    );
};

export default Films;