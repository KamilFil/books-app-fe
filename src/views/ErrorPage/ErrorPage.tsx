import { Link } from "react-router-dom"
import {Footer} from "../../common/Footer/Footer";
import {Menu} from "../../common/Menu/Menu";
import "./ErrorPage.css"
export const ErrorPage = () => {
    return (
        <div className="error-page">
            <Menu/>
            <div className="error-page_section">
            <h1>Błąd 404</h1>
            <p>Opss..  podana strona nie istnieje</p>
            <Link className="btn-back" to="/">Wróc</Link>
            </div>
            <Footer/>
        </div>
    )

}