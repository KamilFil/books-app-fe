import React, {useEffect, useState} from "react";
import {BooksItem} from "./BooksItem";
import "./BooksSection.css"
import {apiGetForCategoryName} from "../../api/api";


interface Props {
    catName: string
}

export const BooksSection = (props: Props) => {

    const [data, setData] = useState<[] | null>(null)

    useEffect(() => {
        apiGetForCategoryName(props.catName).then((res) => {
            setData(res.data)
        })
    }
)

    if(!data) {
        return null
    }

    return (
        <>
                <section className="books">
                    <h2 className="books-title">{props.catName}</h2>
                    <div className="books-section">
                    <BooksItem data={data}></BooksItem>
                    </div>
                </section>
        </>

    )

}