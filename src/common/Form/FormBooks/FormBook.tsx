import {useFormik} from "formik";
import "./FormBook.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
interface Books {
    name:string,
    img: string,
    description: string,
    author:string,
}

interface BooksErrors {
    name?:string,
    img?: string,
    description?: string,
    author?:string,
}

export const FormBook = () => {

    const [send, setSend] = useState<string | null>(null)

    const sendBook = () => {
     setSend("Wysłano")
        console.log(send)
    }

    const validate = (values:Books) =>  {
        const errors:BooksErrors = {}
        if(values.description.length < 200) {
            console.log(values.description)
            errors.description = "Opis musi mieć minimum 200znaków"
        }
        if(!values.author.length) {
            errors.author = "Wprowadz nazwę autora"
        }
        if(values.name.length < 20 || values.name.length >= 160) {
            errors.name = "Tytuł książki musi mieć do 20 - 160 znaków"
        }

        return errors;
    }


    const formik = useFormik({initialValues:{
            name:"",
            img:"",
            description:"",
            author:""
        },
        validate,
        onSubmit:sendBook,
    })



    return (
        <div className="add-book_section">
            <div className="add-book-info">
                <h1>Jak dodać książkę do aplikacji?</h1>
                <p>Cieszymy się, że chcesz dodać swoją ulubioną książke do naszej aplikacji. Poniżej przygotowaliśmy dla Ciebie instrukcje jak to zrobić.</p>
                <ol>
                    <li>Dodaj tytuł książki.</li>
                    <li>Wybierz zdjęcie ksiązki i wrzuć ją za pomocą przycisku "wybierz plik".</li>
                    <li>Napisz krótkie strzeszczenie o książce.</li>
                    <li>Dodaj nazwę autora książki.</li>
                    <li>Kliknij w przycisk wyślij.</li>
                    <li>Poczekaj na zaakceptowanie Twojej książki przez administratora.</li>
                </ol>
                <p> Jeśli nie chcesz dodawać książki powróć na stronę z książkami.</p>
                <div className="btn">
                    <Link className="btn-back" to={"/"}>Wróc</Link>
                </div>
            </div>
            <div className="add-book-panel">
                <div className="add-book-panel_info">
                    <p className="add-book-panel_title">Dodawanie ksiązki</p>
                    <form className="form-add-book" onSubmit={formik.handleSubmit}>
                        <div className="input-item">
                         <input id="name" name="name" onChange={formik.handleChange} value={formik.values.name} placeholder="Tytuł książki"/>
                            {formik.errors.name ? <p className="error-info">{formik.errors.name}</p> : null}
                        </div>
                        <div className="input-item">
                          <input id="img" name="img" onChange={formik.handleChange} value={formik.values.img} placeholder="Nazwa obrazka"/>

                        </div>
                        <div className="input-item">
                            <textarea id="description" name="description" onChange={formik.handleChange} value={formik.values.description} placeholder="Opis"/>
                            {formik.errors.description ? <p className="error-info">{formik.errors.description}</p> : null}
                        </div>
                        <div className="input-item">
                            <input id="author" name="author" onChange={formik.handleChange} value={formik.values.author} placeholder="Nazwa autora"/></div>
                             {formik.errors.author ? <p className="error-info">{formik.errors.author}</p> : null}
                        <button className="btn" type="submit">Wyślij</button>
                    </form>
                </div>
            </div>
        </div>
    )
}