import './HomePageViews.css'
import {Menu} from "../../common/Menu/Menu";
import { Link } from 'react-router-dom';
import {Footer} from "../../common/Footer/Footer";
import React, {useEffect, useState} from "react";
import {BooksSection} from "../../common/Books/BooksSection";
import {apiGetAllBook, apiGetCategory} from "../../api/api";

interface Category {
    id:string
    name:string,
    description:string
}

interface itemBook {
    id:string;
    name:string,
    img:string,
    description:string
    text?:string;

}

export const HomePageViews = () => {
    const [category, setCategory] = useState<Category[] | null>(null)
    const [book, setBook] = useState<itemBook[] | null>(null)

    useEffect(() => {
        apiGetCategory().then((res) => {
            setCategory(res.data)
        })
    },[setCategory])

    useEffect(() => {
        apiGetAllBook().then((res) => {
            setBook(res.data)
        })
    },[setBook])
    return (
        <>
            <Menu/>
            <header>
                <div className="container">
                    <div className="head-info">
                        <h1>Świat Książek</h1>
                        <p>Zbiór książek tworzony przez użytkowników</p>
                        <Link to="./dodaj-ksiazke" className="head-info_link">Dodaj książkę</Link>
                    </div>
                    <div className="favorite-books">
                        <div className="favorite-books-item ">
                            <img src={`http://localhost:35001/uploads/${book?.[1].img}`} alt={book?.[1].name}/>
                            <p>{book?.[1].name}</p>
                            <Link to={`./books/${book?.[1].id}`} className="btn small">Zobacz</Link>
                        </div>
                        <div className="favorite-books-item active">
                            <img src={`http://localhost:35001/uploads/${book?.[2].img}`} alt={book?.[2].name}/>
                            <p>{book?.[2].name}</p>
                            <Link to={`./books/${book?.[2].id}`} className="btn small">Zobacz</Link>
                        </div>
                        <div className="favorite-books-item ">
                            <img src={`http://localhost:35001/uploads/${book?.[3].img}`} alt={book?.[3].name}/>
                            <p>{book?.[3].name}</p>
                            <Link to={`./books/${book?.[3].id}`} className="btn small">Zobacz</Link>
                        </div>
                    </div>
                </div>
            </header>
            {category?.map(el => (<BooksSection catName={el.name} key={el.name}/>)
            )}
            <Footer/>
            </>
    )
}