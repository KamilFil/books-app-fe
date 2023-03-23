import React from "react";
import {Link} from "react-router-dom";

interface itemBook {
    title:string,
    img:string,
    desc:string

}
interface Props {
    data: itemBook[] | null;
}

export const BooksItem = (props: Props) => {

    // props === null

    return (
    <>
        { props.data === null ? <p>Ładowanie elementów</p> : props.data.map(el => <div className="books-item">
        <img src={`img/${el.img}`} alt={el.title}/>
         <div className="books-item_info">
             <Link className="books-item_title" to={`/${el.title}`}>{el.title}</Link>
             <p className="books-item_desc">{el.desc}</p>
         </div>
    </div>
    )}
    </>
    )



}