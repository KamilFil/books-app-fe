import {Menu} from "../../../common/Menu/Menu";
import {Footer} from "../../../common/Footer/Footer";
import "./OnePageView.css"
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {ErrorPage} from "../../ErrorPage/ErrorPage";

interface itemBook {
    id:string;
    name:string,
    img:string,
    description:string
    text?:string;
    likeQuantity:number;
}

const imgPath = "http://localhost:3001/uploads/"

export const OnePageView = () => {

    const [dataBook, setDataBook] = useState<itemBook | null>(null)
    const [loading, setLoading] = useState(false)
    const {id} = useParams()


    useEffect(() => {
        axios.get(`http://localhost:3001/books/${id}`, {withCredentials: true}).then((res) => {
            setDataBook(res.data)
        })
        setLoading(false)

    },[loading])

    if (dataBook === null) {
        return <ErrorPage/>
    }


    const addLike = async() => {

        try {

           await axios.get(`http://localhost:3001/books/like/${id}`, {withCredentials: true})
            setLoading(true)
        } catch (e) {
            console.log(e)
        }


    }


return (
    <div className="one-page-view">
        <Menu/>
        <div className="book-section">
            <div className="book-item">
                <div className="book-item__info-img">
                    <div className="book-item_img">
                        <img src={`${imgPath}${dataBook.img}`} alt={dataBook.name}/>
                    </div>
                    <div className="book-item__rates">
                        <p><i className="fa-brands fa-gratipay"></i>Punktów: {dataBook.likeQuantity}</p>
                        <p><button onClick={addLike}><i className="fa-solid fa-square-plus"></i></button>Dodaj punkt</p>
                    </div>
                </div>
                <div className="book-item__info">
                    <h1>{dataBook.name}</h1>
                    <p>{dataBook.description}</p>
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