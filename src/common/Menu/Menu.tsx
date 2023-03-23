import React from "react";
import { Link } from "react-router-dom";
import './Menu.css'
interface Menu {
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


const menu: Menu[] = [
    {name: "Strona główna", link: "/", title:'Strona główna'},
    {name: "Kategorie", link: "/category", title:'Kategorie'},
    {name: "Zaloguj", link: "/login", title:'Zaloguj'}
]


export const Menu = () => {
    return (  <nav>
            <div className="container-menu">
                <div className="menu-item">
                    <img src={`img/${img.img}`} title={img.title}/>
                </div>
                <div>
                    <ul>

                            {menu.map(item =>  <li>  <Link to={item.link} title={item.title}>{item.name}</Link></li> )}

                    </ul>
                </div>
            </div>
    </nav>
)}
