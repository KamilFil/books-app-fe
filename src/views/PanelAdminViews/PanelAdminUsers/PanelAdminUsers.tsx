import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {apiGetUser} from "../../../api/api";

interface UsersType {
    id?: string;
    email: string;
    role: number,
    username: string,
    active: boolean,
}
export const PanelAdminUsers = () => {

    const [data, setData] = useState<UsersType[] | null>(null)




    useEffect(()=> {
       apiGetUser().then((res) => {
           setData(res.data)
       })
    },[])

    const sendAccecptUser = () => {
        console.log("Działa")
    }

    if (data === null) {
        return <p>Ładowanie</p>
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
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Rola</th>
                                    <th>Data</th>
                                    <th>Zweryfikowany</th>
                                    <th>Akcje</th>
                                </tr>
                                </thead>
                                <tbody>
                                {data.map(el =>  <tr>
                                    <td>{el.username}</td>
                                    <td>{el.email}</td>
                                    <td>{el.role === 0 ? "Admin" : "User"}</td>
                                    <td>10.01.2022</td>
                                    <td>{!el.active ? "Nie" : "Tak"}</td>
                                    <td> <Link to='/books/d'><i className="fa-solid fa-eye"></i></Link>
                                        <button><i className="fa-solid fa-file-pen"></i></button>
                                        <button type="submit" onClick={sendAccecptUser }><i className="fa-solid fa-circle-check"></i></button>
                                        <button><i className="fa-solid fa-circle-xmark"></i></button>
                                    </td>
                                </tr>)}
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