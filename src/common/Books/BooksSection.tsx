import React from "react";
import {BooksItem} from "./BooksItem";
import "./BooksSection.css"

interface itemBook {
    id:string
    name:string,
    img:string,
    description:string
    text?:string
}

interface Props {
    dataBooks:itemBook[] | null
}

const category = ["it", "organizacja", "grafika"]



export const BooksSection = (props: Props) => {

    return (
        <>
            {category.map(el =>
                <section className="books">
                    <h2 className="books-title">{el}</h2>
                    <div className="books-section">
                    <BooksItem data={props.dataBooks}></BooksItem>
                    </div>
                </section>
            )}
        </>

    )

}