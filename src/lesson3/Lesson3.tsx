import React, {SetStateAction, useState} from 'react';
import API from './API';
import './lesson_3';
import Films from "./Films";
import style from './films.module.css'


export type FilmsType = {
    id: string,
    Title: string,
    Type: string,
    Poster: any
}

const Lesson3 = () => {
    const [searchName, setSearchName] = useState<string>('');
    const [serachResult, setSerachResult] = useState<FilmsType[] | undefined>();
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSerachResultByType] = useState('');
    const [serachError, setSerachError] = useState<string>('');

    // const searchFilm = () => {
    //     API.searchFilmsByTitle(searchName)
    //         .then(( { data }) => {
    //             const { Search, Error, Response } = data;
    //             Response === 'True' ? setSerachResult(JSON.stringify(Search)) : setSerachResult(Error);
    //         })
    //         .catch(err => {
    //             console.log('err ', err);
    //         })
    // };

    const searchFilm = async () => {
        try {
            const {data} = await API.searchFilmsByTitle(searchName);
            const {Search, Error, Response} = data;
            Response === 'True' ? setSerachResult(Search) : setSerachError(JSON.stringify(Error));
        } catch (err) {
            console.log('err ', err);
        }
    };
    const searchByType = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        try {
            const {data} = await API.searchFilmsByType(searchNameByType, type);
            const {Search, Error, Response} = data;
            Response === 'True' ? setSerachResultByType(JSON.stringify(Search)) : setSerachResultByType(JSON.stringify(Error))
        } catch (err) {
            console.log('err ', err);
        }
    }

    // const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
    //     console.log(type)
    //     API.searchFilmsByType(searchNameByType, type)
    // }


    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div className={style.film}>
                    {serachResult?.map((f, index) => <Films key={index} id={f.id} Title={f.Title} Type={f.Type}
                                                            Poster={f.Poster}/>) || serachError}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {serachResultByType}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;