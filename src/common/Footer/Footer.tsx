import { Link } from "react-router-dom";
import React from "react";
import "./Footer.css"
interface BrandData {
    img: string,
    title: string,
    desc: string,
}
interface MenuData {
    title: string;
    link: {name: string, link: string}[]
}

interface BrandSite {
    img: string,
    title: string,
}


const img: BrandSite = {
    img:"logo.png",
    title: 'Books.pl'
}
interface FooterMenu {
    menu: MenuData[];
}

const dataMenu: FooterMenu = {
    // title:'Books.pl',
    menu:[
        { title: "Nawigacja",
            link:[
                {name: "Strona główna", link: "/"},
                {name: "Kategorie", link: "/kategorie/"},
                {name: "Zaloguj", link: "/zaloguj/"}
            ]
        },
        { title: "Blog",
            link:[
                {name: "Wpis1", link: "/wpis1/"},
                {name: "Wpis2", link: "/wpis2/"},
                {name: "Wpis3", link: "/wpis3/"}
            ]
        },
        { title: "Top książki",
            link:[
                {name: "Książka 1", link: "/id1"},
                {name: "Książka 2", link: "/id2"},
                {name: "Książka 3", link: "/id3"}
            ]
        },

    ]
}

const dataBrand: BrandData ={
    img:"logo.png",
    title: 'Books.pl',
    desc: "Witaj na naszej stronie, znajdziesz tu mam nadzieję wiele ciekawych książek, które pomogą Ci znaleźć odpowiedź na nurtujące Cię pytania"
}

export const Footer = () => {


    return (
        <footer>

            <div className="footer-column">
                <div className="footer-brand">
                    <p>Books.pl</p>
                    <p>{dataBrand.desc}</p>
                </div>
                {dataMenu.menu.map(el =>
                    <div className="footer-item">
                        <p>{el.title}</p>
                        {el.link.map(el => <li><Link to={el.link}>{el.name}</Link></li>)}
                    </div>
                )}

            </div>
            <p className="footer-copy"> Strona stworzona na potrzeby portfolio</p>
        </footer>
    )
}