import { Link } from "react-router-dom";
import React from "react";
import "./Footer.css"

interface FooterMenu {
    menu: MenuData[];
}
interface MenuData {
    title: string;
    link: {name: string, link: string}[]
}

interface FooterBrand {
    img: [
        { link: string,
        title: string,}
    ]
    title: string,
    desc: string,
}

const dataBrand: FooterBrand = {
    img:[
        {
            link:"logo.png",
        title:"Logo"
        }

    ],
    title: 'Books.pl',
    desc: "Witaj na naszej stronie, znajdziesz tu mam nadzieję wiele ciekawych książek, które pomogą Ci znaleźć odpowiedź na nurtujące Cię pytania"
}

const footerMenu: FooterMenu = {
    // title:'Books.pl',
    menu:[
        { title: "Nawigacja",
            link:[
                {name: "Strona główna", link: "/"},
                {name: "Kategorie", link: "/kategorie/"},
                {name: "Zaloguj", link: "/zaloguj/"}
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

export const Footer = () => {
    return (
        <footer>
            <div className="footer-column">
                <div className="footer-brand">
                    <p>Books.pl</p>
                    <p>{dataBrand.desc}</p>
                </div>
                {footerMenu.menu.map(el =>
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