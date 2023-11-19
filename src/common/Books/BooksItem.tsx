import React from "react";
import {Link} from "react-router-dom";
import "./BooksItem.css"
interface itemBook {
    id:string;
    name:string,
    img:string,
    description:string
    text?:string;

}
interface Props {
    data: itemBook[] | null;
}

const domainImg = 'http://localhost:35001/uploads'
export const BooksItem = (props: Props) => {
    return (
    <>
        { props.data === null ? <p>Ładowanie elementów</p> : props.data.map(el => <div className="books-item" key={el.name}>
        <img src={`${domainImg}/${el.img}`} alt={el.name}/>
         <div className="books-item_info" >
             <Link className="books-item_title" to={`/books/${el.id}`}>{el.name}</Link>
             <p className="books-item_desc">{el.description}</p>
         </div>

    </div>

    )}
    </>
    )
}