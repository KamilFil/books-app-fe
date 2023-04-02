import {Link} from "react-router-dom";
import "./PanelAdminBooks.css"
export const PanelAdminBooks = () => {

    const sendAccecptBooks = () => {
        console.log("Działa")
    }


    return (
        <div className="panel-admin-page">
            <div className="panel-admin-menu">
                <div className="panel-admin-menu_img">
                    <img src="/img/logo.png"/>
                </div>
                <nav className="admin-menu">
                    <p className="admin-menu-title">Dashboard</p>
                    <ul>
                        <li>
                            <Link to="/panel-admin/">Statystyki</Link>
                        </li>
                    </ul>
                </nav>
                <nav className="admin-menu">
                    <p className="admin-menu-title">Zarządzanie</p>
                    <ul>
                        <li>
                            <Link to="/panel-admin/users">Użytkownicy</Link>
                        </li>
                        <li>
                            <Link to="/panel-admin/books">Książki</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <main>
                <div className="dashboard-admin">
                    <div className="dashboard-head">
                        <div className="dashboard-head_container">
                            <h1>Panel Admin</h1>
                            <div className="user-info">
                                <p>Username</p>
                                <img src="/img/book.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className="list-info">
                                <div className="book-list">
                                    <p>Książki - zarządzanie</p>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Tytuł</th>
                                            <th>Opis</th>
                                            <th>Ilość polubień</th>
                                            <th>Data</th>
                                            <th>Opublikowany</th>
                                            <th>Akcje</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Zjedz tę żabę</td>
                                            <td>opis</td>
                                            <td>200</td>
                                            <td>10.01.2022</td>
                                            <td>Tak</td>
                                            <td> <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link>
                                                <button><i className="fa-solid fa-file-pen"></i></button>
                                                <button type="submit" onClick={sendAccecptBooks}><i className="fa-solid fa-circle-check"></i></button>
                                                <button><i className="fa-solid fa-circle-xmark"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Zjedz tę żabę</td>
                                            <td>opis</td>
                                            <td>200</td>
                                            <td>10.01.2022</td>
                                            <td>Tak</td>
                                            <td> <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link>
                                                <button><i className="fa-solid fa-file-pen"></i></button>
                                                <button type="submit" onClick={sendAccecptBooks}><i className="fa-solid fa-circle-check"></i></button>
                                                <button><i className="fa-solid fa-circle-xmark"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Zjedz tę żabę</td>
                                            <td>opis</td>
                                            <td>200</td>
                                            <td>10.01.2022</td>
                                            <td>Tak</td>
                                            <td> <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link>
                                                <button><i className="fa-solid fa-file-pen"></i></button>
                                                <button type="submit" onClick={sendAccecptBooks}><i className="fa-solid fa-circle-check"></i></button>
                                                <button><i className="fa-solid fa-circle-xmark"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Zjedz tę żabę</td>
                                            <td>opis</td>
                                            <td>200</td>
                                            <td>10.01.2022</td>
                                            <td>Tak</td>
                                            <td> <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link>
                                                <button><i className="fa-solid fa-file-pen"></i></button>
                                                <button type="submit" onClick={sendAccecptBooks}><i className="fa-solid fa-circle-check"></i></button>
                                                <button><i className="fa-solid fa-circle-xmark"></i></button>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Zjedz tę żabę</td>
                                            <td>opis</td>
                                            <td>200</td>
                                            <td>10.01.2022</td>
                                            <td>Tak</td>
                                            <td> <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link>
                                                <button><i className="fa-solid fa-file-pen"></i></button>
                                                <button type="submit" onClick={sendAccecptBooks}><i className="fa-solid fa-circle-check"></i></button>
                                                <button><i className="fa-solid fa-circle-xmark"></i></button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                    </div>
                    <div className="footer-dash">
                    </div>
                </div>

            </main>
        </div>
    )
}