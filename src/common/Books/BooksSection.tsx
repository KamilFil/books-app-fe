import React from "react";
import {BooksItem} from "./BooksItem";


interface BookData {
    category:{categoryName:string}[]
    data:any[]
}


const BookSection: BookData = {
    category: [
        {categoryName: "Organizacja"},
        {categoryName: "IT",},
        {categoryName: "Inne",}
    ],
    data: [{
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

export const BooksSection = () => {
    return (
        <>
            {BookSection.category.map(el =>
                <section className="books">
                    <h2 className="books-title">{el.categoryName}</h2>
                    <div className="books-section">
                    <BooksItem data={BookSection.data}></BooksItem>
                    </div>
                </section>
            )}
        </>

    )

}