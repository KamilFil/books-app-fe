import React from "react";
import { Link } from "react-router-dom";
import './Menu.css'
interface MenuType {
    name: string,
    title: string,
    link: string,
}

interface BrandSite {
    img: string,
    title: string,
}


const img: BrandSite = {
    img:"logo.png",
    title: 'Books.pl'
}


const menu: MenuType[] = [
    {name: "Strona główna", link: "/", title:'Strona główna'},
    {name: "Dodaj książkę", link: "/add-book", title:'Dodawanie ksiązki'}
]


export const Menu = () => {
    return (  <nav className="main-menu">
            <div className="container-menu">
                <div className="menu-item">
                    <img src={`/img/${img.img}`} title={img.title}/>
                </div>
                <div>
                    <ul>

                            {menu.map(item =>  <li> <Link to={item.link} title={item.title}>{item.name}</Link></li> )}

                    </ul>
                </div>
            </div>
    </nav>
)}
