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
                    <div className="list-info">
                                <div className="book-list">
                                    <p>Książki - zarządzanie</p>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Tytuł</th>
                                            <th>Ilość polubień</th>
                                            <th>Opublikowany</th>
                                            <th>Akcje</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {data.map(el =>
                                            <tr>
                                                <td>{el.name}</td>
                                                <td>{el.likeQuantity}</td>
                                                <td>{el.active ? "Tak" : "Nie"}</td>
                                                <td> <Link to={`/books/${el.id}`}><i className="fa-solid fa-eye"></i></Link>
                                                    {el.active ?  <button type="submit" onClick={() => sendAccecptBooks(el.id)}><i className="fa-solid fa-circle-check"></i></button> : <button type="submit" onClick={(e) => sendAccecptBooks(el.id)}><i className="fa-solid fa-circle-xmark"></i></button>}
                                                </td>
                                            </tr>
                                        )}

                                        </tbody>
                                    </table>
                                </div>

                    </div>

    )
}