import {Menu} from "../../../common/Menu/Menu";
import {Footer} from "../../../common/Footer/Footer";
import "./OnePageView.css"
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

interface itemBook {
    id:string;
    name:string,
    img:string,
    description:string
    text?:string;
}

const imgPath = "http://localhost:3001/uploads/"

export const OnePageView = () => {

    const [dataBook, setDataBook] = useState<itemBook | null>(null)

    const {id} = useParams()


    useEffect(() => {

        axios.get(`http://localhost:3001/books/${id}`, {withCredentials: true}).then((res) => {
            setDataBook(res.data)
        })
    },[dataBook])

    if (dataBook === null) {
        return <p>Brak zasobu</p>
    }


return (
    <div className="one-page-view">
        <Menu/>
        <div className="book-section">
            <div className="book-item">
                <div className="book-item_img">
                    <img src={`${imgPath}${dataBook.img}`} alt={dataBook.name}/>
                </div>
                <div className="book-item__info">
                    <h1>{dataBook.name}</h1>
                    <div className="book-item__rates">
                        <div className="book-item__rate">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa-solid fa-star-half"></i>
                        </div>
                        <p>4.5</p>
                    </div>
                    <p>{dataBook.description}</p>
                    <div className="book-item_opinions">
                        <div className="book-item_opinion">
                            <p className="book-item_opinion_author">Roman Roman</p>
                            <p className="book-item_opinion_desc">lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                        </div>
                        <div className="book-item_opinion">
                            <p className="book-item_opinion_author">Roman Roman</p>
                            <p className="book-item_opinion_desc">lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                        </div>
                    </div>
                    <div className="btn">
                        <Link className="btn-back" to={"/"}>Wróc</Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
)
}