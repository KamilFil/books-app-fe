import './HomePageViews.css'
import {Menu} from "../../common/Menu/Menu";
import { Link } from 'react-router-dom';
import {Footer} from "../../common/Footer/Footer";
import React from "react";
import {BooksSection} from "../../common/Books/BooksSection";

export const HomePageViews = () => {

    const dataBooks = {
        category: [
            {categoryName: "Organizacja"},
            {categoryName: "IT",},
            {categoryName: "Inne",}
        ],
        dataBooks: [{
            title: "Zjedz tę żabę",
            img: '/testb.jpg',
            desc: 'Zjedz tę zabę, książka o organizacji czasu pracy',
            text: '',
        },
            {
                title: "Ilustrowany przewosnik o algorytmach",
                img: '/testa.jpg',
                desc: 'Książka o stosowanych algorytmach w IT',
                text: '',
            },
            {
                title: "Zjedz tę żabę",
                img: '/testb.jpg',
                desc: 'Zjedz tę zabę, książka o organizacji czasu pracy',
                text: '',
            },
            {
                title: "Kamile",
                img: '/testa.jpg',
                desc: 'test',
                text: '',
            },]
    }



    return (
        <>   <Menu></Menu>
            <header>
                <div className="container">

                    <div className="head-info">
                        <h1>Świat Książek</h1>
                        <p>Zbiór książek tworzony przez użytkowników</p>
                        <Link to="/blog" className="head-info_link">Blog</Link>
                    </div>
                    <div className="favorite-books">
                        <div className="favorite-books-item ">
                            <img src="img/testb.jpg" alt="alternatywny tekst"/>
                            <p>Zjedz tę żabę</p>
                            <Link to="/blog" className="btn small">Zobacz</Link>
                        </div>
                        <div className="favorite-books-item active">
                            <img src="img/testa.jpg" alt="alternatywny tekst"/>
                            <p>Ilustrowany przewodnik o algorymtach</p>
                            <Link to="/blog" className="btn small">Zobacz</Link>
                        </div>
                        <div className="favorite-books-item">
                            <img src="img/testb.jpg" alt="alternatywny tekst"/>
                            <p>Zjedz tę żabę</p>
                            <Link to="/blog" className="btn small">Zobacz</Link>
                         </div>
                    </div>

                </div>
            </header>
            <BooksSection category={dataBooks.category} dataBooks={dataBooks.dataBooks}/>
            <Footer/>
            </>
    )
}