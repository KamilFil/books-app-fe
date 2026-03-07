import {Menu} from "../../../common/Menu/Menu";
import {Footer} from "../../../common/Footer/Footer";
import "./PanelAdminOneBook.css"
import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {ErrorPage} from "../../ErrorPage/ErrorPage";
import {apiGetOneBookForAdmin } from "../../../api/api";
import {BooksSection} from "../../../common/Books/BooksSection";

interface itemBook {
    id:string;
    name:string,
    img:string,
    description:string
    author: string
    categories: {
        name: string
    }
    text?:string;
    likeQuantity:number;
}

const domainImg = 'http://localhost:3001/uploads'
export const PanelAdminOneBook = () => {
    const [dataBook, setDataBook] = useState<itemBook | null>(null);
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await apiGetOneBookForAdmin(id);

                if (!res.data) {
                    setErrors(true);
                    return;
                }

                setDataBook(res.data);
            } catch (e) {
                setErrors(true);
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [id]);

    if (loading) {
        return <p>Ładowanie...</p>;
    }

    if (errors || !dataBook) {
        return <ErrorPage />;
    }

    return (
        <div className="one-page-view">
            <Menu/>
            <div className="book-section">
                <div className="book-item">
                    <div className="book-item__info-img">
                        <div className="book-item_img">
                            <img
                                src={`${domainImg}/${dataBook.img}`}
                                alt={dataBook.name}
                            />
                        </div>
                    </div>

                    <div className="book-item__info">
                        <h1>{dataBook.name}</h1>
                        <p className="book-item-author">
                            Autor: {dataBook.author}
                        </p>
                        <p>{dataBook.description}</p>
                        <div className="btn">
                            <Link className="btn-back" to="/">Wróć</Link>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="book-info_category-futured">
                        Inne książki z kategorii {dataBook.categories.name}
                    </p>
                    <BooksSection catName={dataBook.categories.name} />
                </div>
            </div>
            <Footer/>
        </div>
    );
};
