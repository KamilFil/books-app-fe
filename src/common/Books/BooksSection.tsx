import React from "react";
import {BooksItem} from "./BooksItem";
import "./BooksSection.css"

interface itemBook {
    title:string,
    img:string,
    desc:string
    text?:string
}

interface Props {
    category:{categoryName:string}[]
    dataBooks:itemBook[]
}




export const BooksSection = (props: Props) => {
    return (
        <>
            {props.category.map(el =>
                <section className="books">
                    <h2 className="books-title">{el.categoryName}</h2>
                    <div className="books-section">
                    <BooksItem data={props.dataBooks}></BooksItem>
                    </div>
                </section>
            )}
        </>

    )

}