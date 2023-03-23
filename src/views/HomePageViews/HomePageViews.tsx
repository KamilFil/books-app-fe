import './HomePageViews.css'
import {Menu} from "../../common/Menu/Menu";
import { Link } from 'react-router-dom';
import {Footer} from "../../common/Footer/Footer";
import React from "react";
import {BooksSection} from "../../common/Books/BooksSection";

export const HomePageViews = () => {

    const check = {
        user: "Uzytkownik",
        age: 0,
        description: "dwadawdaw dawdwadawdaw wadwad wadwd awdawdwada"
    }



    return (
        <>   <Menu></Menu>
            <header>
                <div className="container">

                    <div className="head-info">
                        <h1>Twoja księgarnia online</h1>
                        <p>Twoje najlepsze kolekcje ksiązek</p>
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
            <BooksSection/>
            <Footer></Footer>
            </>
    )
}