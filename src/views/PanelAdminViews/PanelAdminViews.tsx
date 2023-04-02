import "./PanelAdminViews.css"
import {Link} from "react-router-dom";

export const PanelAdminViews = () => {

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
                    <div className="dashboard-info">
                    <div className="dashboard">
                        <section className="dash">
                            <div className="dash-stats">
                                <p>Książki</p>
                                <div className="stats-container">
                                    <div className="stats-item ">
                                        <p>Zaakceptowane</p>
                                        <div className="stats-circle accept">
                                        <p>100</p>
                                        </div>
                                        <Link className="btn-back" to="/panel-admin/books">Zobacz</Link>
                                    </div>
                                    <div className="stats-item">
                                        <p>Do akceptacji</p>
                                        <div className="stats-circle to-accept">
                                            <p>100</p>
                                        </div>
                                        <Link className="btn-back" to="/panel-admin/books">Zobacz</Link>
                                    </div>
                                    <div className="stats-item">
                                        <p>Odrzucone</p>
                                        <div className="stats-circle">
                                            <p>100</p>
                                        </div>
                                        <Link className="btn-back" to="/panel-admin/books">Zobacz</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="dash-list">
                                <p>Książki zaakceptowane</p>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Tytuł</th>
                                        <th>Polubienia</th>
                                        <th>Akcje</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Zjedz tę żabę</td>
                                        <td>10</td>
                                        <td> <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link></td>
                                    </tr>
                                    <tr>
                                        <td>Zjedz tę żabę</td>
                                        <td>10</td>
                                        <td> <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link></td>
                                    </tr>
                                    <tr>
                                        <td>Zjedz tę żabę</td>
                                        <td>10</td>
                                        <td> <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link></td>
                                    </tr>
                                    <tr>
                                        <td>Zjedz tę żabę</td>
                                        <td>10</td>
                                        <td> <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link></td>
                                    </tr>
                                    <tr>
                                        <td>Zjedz tę żabę</td>
                                        <td>10</td>
                                        <td> <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="dash-list">
                                <p>Książki do akceptacji</p>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Tytuł</th>
                                        <th>Data</th>
                                        <th>Akcje</th>
                                    </tr>

                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Zjedz tę żabę</td>
                                        <td>10</td>
                                        <td>   <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link>
                                            <button><i className="fa-solid fa-circle-check"></i></button>
                                            <button><i className="fa-solid fa-circle-xmark"></i></button></td>

                                    </tr>
                                    <tr>
                                        <td>Zjedz tę żabę</td>
                                        <td>10</td>
                                        <td>   <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link>
                                            <button><i className="fa-solid fa-circle-check"></i></button>
                                            <button><i className="fa-solid fa-circle-xmark"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>Zjedz tę żabę</td>
                                        <td>10</td>
                                        <td>   <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link>
                                            <button><i className="fa-solid fa-circle-check"></i></button>
                                            <button><i className="fa-solid fa-circle-xmark"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>Zjedz tę żabę</td>
                                        <td>10</td>
                                        <td>   <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link>
                                            <button><i className="fa-solid fa-circle-check"></i></button>
                                            <button><i className="fa-solid fa-circle-xmark"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>Zjedz tę żabę</td>
                                        <td>10</td>
                                        <td>   <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link>
                                            <button><i className="fa-solid fa-circle-check"></i></button>
                                            <button><i className="fa-solid fa-circle-xmark"></i></button></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                    <div className="dashboard">
                        <section className="dash">
                            <div className="dash-stats">
                                <p>Użytkownicy</p>
                                <div className="stats-container">
                                    <div className="stats-item ">
                                        <p>Zaakceptowane</p>
                                        <div className="stats-circle accept">
                                            <p>100</p>
                                        </div>

                                        <Link className="btn-back" to="/panel-admin/users">Zobacz</Link>
                                    </div>
                                    <div className="stats-item">
                                        <p>Do akceptacji</p>
                                        <div className="stats-circle to-accept">
                                            <p>100</p>
                                        </div>
                                        <Link className="btn-back" to="/panel-admin/users">Zobacz</Link>
                                    </div>
                                    <div className="stats-item">
                                        <p>Odrzucone</p>
                                        <div className="stats-circle">
                                            <p>100</p>
                                        </div>
                                        <Link className="btn-back" to="/panel-admin/users">Zobacz</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="dash-list">
                                <p>Zarejestrowani użytkownicy</p>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>Data</th>
                                        <th>Akcje</th>
                                    </tr>

                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Zjedz tę żabę</td>
                                        <td>10</td>
                                        <td>  <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link>
                                            <button><i className="fa-solid fa-file-pen"></i></button></td>

                                    </tr>
                                    <tr>
                                        <td>Zjedz tę żabę</td>
                                        <td>10</td>
                                        <td>  <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link>
                                            <button><i className="fa-solid fa-file-pen"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>Zjedz tę żabę</td>
                                        <td>10</td>
                                        <td>  <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link>
                                            <button><i className="fa-solid fa-file-pen"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>Zjedz tę żabę</td>
                                        <td>10</td>
                                        <td>  <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link>
                                            <button><i className="fa-solid fa-file-pen"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>Zjedz tę żabę</td>
                                        <td>10</td>
                                        <td>  <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link>
                                            <button><i className="fa-solid fa-file-pen"></i></button></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="dash-list">
                                <p>Nowi użytkownicy</p>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>Data</th>
                                        <th>Akcje</th>
                                    </tr>

                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Zjedz tę żabę</td>
                                        <td>10</td>
                                        <td> <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link>
                                            <button><i className="fa-solid fa-circle-check"></i></button>
                                            <button><i className="fa-solid fa-circle-xmark"></i></button></td>

                                    </tr>
                                    <tr>
                                        <td>Zjedz tę żabę</td>
                                        <td>10</td>
                                        <td> <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link>
                                            <button><i className="fa-solid fa-circle-check"></i></button>
                                            <button><i className="fa-solid fa-circle-xmark"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>Zjedz tę żabę</td>
                                        <td>10</td>
                                        <td> <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link>
                                            <button><i className="fa-solid fa-circle-check"></i></button>
                                            <button><i className="fa-solid fa-circle-xmark"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>Zjedz tę żabę</td>
                                        <td>10</td>
                                        <td> <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link>
                                            <button><i className="fa-solid fa-circle-check"></i></button>
                                            <button><i className="fa-solid fa-circle-xmark"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>Zjedz tę żabę</td>
                                        <td>10</td>
                                        <td> <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link>
                                            <button><i className="fa-solid fa-circle-check"></i></button>
                                            <button><i className="fa-solid fa-circle-xmark"></i></button></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </div>
                    <div className="footer-dash">
                    </div>
                </div>

            </main>
        </div>
    )
}