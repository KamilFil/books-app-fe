import {Menu} from "../../../common/Menu/Menu";
import {Footer} from "../../../common/Footer/Footer";
import "./OnePageView.css"
import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {ErrorPage} from "../../ErrorPage/ErrorPage";
import {apiGetOneBook, apiLikeBook} from "../../../api/api";
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

const domainImg = 'http://localhost:35001/uploads'
export const OnePageView = () => {

    const [dataBook, setDataBook] = useState<itemBook | null>(null)
    const [loading, setLoading] = useState(false)
    const {id} = useParams()


    useEffect(() => {
        apiGetOneBook(id).then((res) => {
            setDataBook(res.data)
        })
        setLoading(false)

    },[id])

    if (dataBook === null) {
        return <ErrorPage/>
    }

    // const addLike = async() => {
    //
    //     try {
    //        await apiLikeBook(id)
    //         setLoading(true)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }


return (
    <div className="one-page-view">
        <Menu/>
        <div className="book-section">
            <div className="book-item">
                <div className="book-item__info-img">
                    <div className="book-item_img">
                        <img src={`${domainImg}/${dataBook.img}`} alt={dataBook.name}/>
                    </div>
                    {/*<div className="book-item__rates">*/}
                    {/*    <p><i className="fa-brands fa-gratipay"></i>Punktów: {dataBook.likeQuantity}</p>*/}
                    {/*    <p><button onClick={addLike}><i className="fa-solid fa-square-plus"></i></button>Dodaj punkt</p>*/}
                    {/*</div>*/}
                </div>
                <div className="book-item__info">
                    <h1>{dataBook.name}</h1>
                    <p className="book-item-author">{dataBook.author}</p>
                    <p>{dataBook.description}</p>
                    <div className="btn">
                        <Link className="btn-back" to={"/"}>Wróc</Link>
                    </div>
                </div>
            </div>
            <div>
                <p className="book-info_category-futured">Inne ksiązki z kategori {dataBook.categories.name}</p>
                <BooksSection catName={dataBook.categories.name} />
            </div>
        </div>
        <Footer/>
    </div>
)
}