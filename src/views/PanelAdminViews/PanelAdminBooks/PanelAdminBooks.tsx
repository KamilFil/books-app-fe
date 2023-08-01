import {Link} from "react-router-dom";
import "./PanelAdminBooks.css"
import { useEffect, useState} from "react";
import {apiActiveBooks, apiGetAllBook} from "../../../api/api";

interface itemBook {
    id:string;
    name:string,
    img:string,
    description:string
    text?:string;
    active: boolean;
    likeQuantity:number;
}
export const PanelAdminBooks = () => {

    const [data, setData] = useState<itemBook[] | null>(null)
    const [load, setLoad] = useState(false)

    useEffect(()=> {
        apiGetAllBook().then((res) => {
            setData(res.data)
        })
    },[load])




    const sendAccecptBooks = async (id: string) => {
        setLoad(true)
       await apiActiveBooks(id).then((res) => {
          return res.data
       })
        setLoad(false)
    }

    if(data === null) {
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
                                            <th>Tytuł</th>
                                            <th>Ilość polubień</th>
                                            <th>Data</th>
                                            <th>Opublikowany</th>
                                            <th>Akcje</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {data.map(el =>
                                            <tr>
                                                <td>{el.name}</td>
                                                <td>{el.likeQuantity}</td>
                                                <td>10.01.2022</td>
                                                <td>{el.active ? "Tak" : "Nie"}</td>
                                                <td> <Link to={`/books/${el.id}`}><i className="fa-solid fa-eye"></i></Link>
                                                    <button id={`data-id=${el.id}`}><i className="fa-solid fa-file-pen"></i></button>
                                                    {el.active ?  <button type="submit" onClick={() => sendAccecptBooks(el.id)}><i className="fa-solid fa-circle-check"></i></button> : <button type="submit" onClick={(e) => sendAccecptBooks(el.id)}><i className="fa-solid fa-circle-xmark"></i></button>}
                                                </td>
                                            </tr>
                                        )}

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