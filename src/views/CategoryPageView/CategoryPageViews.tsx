import React, {useEffect, useState} from "react";
import {Menu} from "../../common/Menu/Menu";
import {ErrorPage} from "../ErrorPage/ErrorPage";
import {apiGetForCategoryName} from "../../api/api";
import {useParams} from "react-router-dom";
import {BooksItem} from "../../common/Books/BooksItem";
import './CategoryPageView.css'
import {Footer} from "../../common/Footer/Footer";
interface itemBook {
    id:string;
    name:string,
    img:string,
    description:string
    text?:string;
    likeQuantity:number;
}

export const CategoryPageViews = () => {

    const [data, setData] = useState<itemBook[] | null>(null)
    const [loading, setLoading] = useState(false)
    const {categoryName} = useParams()
    const {pageNumber} = useParams()


    useEffect(() => {
        apiGetForCategoryName(categoryName?.toUpperCase()).then((res) => {
            setData(res.data)
        })
        setLoading(false)

    },[categoryName])

    if(data === null) {
        return  <ErrorPage/>
    }

    return (


        <>
        <Menu></Menu>
            <div className='category-section'>
            <h1>Kategoria {categoryName?.toUpperCase()} {pageNumber ? `- strona ${pageNumber}` : null}</h1>
                <div className='category-section_item'>
                    <BooksItem data={data}/>
                </div>
            </div>
            <Footer/>
    </>)
}