import './HomePageViews.css'
import {Menu} from "../../common/Menu/Menu";
import { Link } from 'react-router-dom';
import {Footer} from "../../common/Footer/Footer";
import React, {useEffect, useState} from "react";
import {BooksSection} from "../../common/Books/BooksSection";
import axios from 'axios';

export const HomePageViews = () => {

    const [data, setData] = useState<[] | null>(null)


    useEffect(() => {
        axios.get("http://localhost:3001/books/", {withCredentials: true}).then((res) => {
            setData(res.data)
        })
    },[setData])


    return (
        <>   <Menu></Menu>
            <header>
                <div className="container">

                    <div className="head-info">
                        <h1>Świat Książek</h1>
                        <p>Zbiór książek tworzony przez użytkowników</p>
                        <Link to="/add-book" className="head-info_link">Dodaj książkę</Link>
                    </div>
                    <div className="favorite-books">
                        <div className="favorite-books-item ">
                            <img src="img/testb.jpg" alt="alternatywny tekst"/>
                            <p>Zjedz tę żabę</p>
                            <Link to="/books/1" className="btn small">Zobacz</Link>
                        </div>
                        <div className="favorite-books-item active">
                            <img src="img/testa.jpg" alt="alternatywny tekst"/>
                            <p>Ilustrowany przewodnik o algorymtach</p>
                            <Link to="/books/1" className="btn small">Zobacz</Link>
                        </div>
                        <div className="favorite-books-item">
                            <img src="img/testb.jpg" alt="alternatywny tekst"/>
                            <p>Zjedz tę żabę</p>
                            <Link to="/books/1" className="btn small">Zobacz</Link>
                         </div>
                    </div>

                </div>
            </header>
            <BooksSection dataBooks={data}/>
            <Footer/>
            </>
    )
}