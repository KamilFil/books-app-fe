import './HomePageViews.css'

export const HomePageViews = () => {

    const check = {
        user: "Uzytkownik",
        age: 0,
        description: "dwadawdaw dawdwadawdaw wadwad wadwd awdawdwada"
    }

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <a>Link</a>
                        </li>
                    </ul>
                </nav>
                <h1>Twoja księgarnia online</h1>
            </header>
            <section className="books">
                <h2 className="books-title">Kategoria</h2>
                <div className="books-section">
                    <div className="books-item">
                        <img src="img/book.jpg" alt="alternatywny tekst"/>
                        <div className="books-item_info">
                            <a href="/" className="books-item_title">title</a>
                            <p className="books-item_desc">description</p>
                        </div>
                    </div>
                    <div className="books-item">
                        <img src="img/book.jpg" alt="alternatywny tekst"/>
                        <div className="books-item_info">
                            <a href="/" className="books-item_title">title</a>
                            <p className="books-item_desc">description</p>
                        </div>
                    </div>
                    <div className="books-item">
                        <img src="img/book.jpg" alt="alternatywny tekst"/>
                        <div className="books-item_info">
                            <a href="/" className="books-item_title">title</a>
                            <p className="books-item_desc">description</p>
                        </div>
                    </div>
                    <div className="books-item">
                        <img src="img/book.jpg" alt="alternatywny tekst"/>
                        <div className="books-item_info">
                            <a href="/" className="books-item_title">title</a>
                            <p className="books-item_desc">description</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="books">
                <h2 className="books-title">Kategoria</h2>
                <div className="books-section">
                    <div className="books-item">
                        <img src="img/book.jpg" alt="alternatywny tekst"/>
                        <div className="books-item_info">
                            <a href="/" className="books-item_title" title="tytuł ksiązki">Książka o Kamilu Filipe, który był..</a>
                            <p className="books-item_desc">description</p>
                        </div>
                    </div>
                    <div className="books-item">
                        <img src="img/book.jpg" alt="alternatywny tekst"/>
                        <div className="books-item_info">
                            <a href="/" className="books-item_title">title</a>
                            <p className="books-item_desc">description</p>
                        </div>
                    </div>
                    <div className="books-item">
                        <img src="img/book.jpg" alt="alternatywny tekst"/>
                        <div className="books-item_info">
                            <a href="/" className="books-item_title">title</a>
                            <p className="books-item_desc">description</p>
                        </div>
                    </div>
                    <div className="books-item">
                        <img src="img/book.jpg" alt="alternatywny tekst"/>
                        <div className="books-item_info">
                            <a href="/" className="books-item_title">title</a>
                            <p className="books-item_desc">description</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="books">
                <h2 className="books-title">Kategoria</h2>
                <div className="books-section">
                    <div className="books-item">
                        <img src="img/book.jpg" alt="alternatywny tekst"/>
                        <div className="books-item_info">
                            <a href="/" className="books-item_title">title</a>
                            <p className="books-item_desc">description</p>
                        </div>
                    </div>
                    <div className="books-item">
                        <img src="img/book.jpg" alt="alternatywny tekst"/>
                        <div className="books-item_info">
                            <a href="/" className="books-item_title">title</a>
                            <p className="books-item_desc">description</p>
                        </div>
                    </div>
                    <div className="books-item">
                        <img src="img/book.jpg" alt="alternatywny tekst"/>
                        <div className="books-item_info">
                            <a href="/" className="books-item_title">title</a>
                            <p className="books-item_desc">description</p>
                        </div>
                    </div>
                    <div className="books-item">
                        <img src="img/book.jpg" alt="alternatywny tekst"/>
                        <div className="books-item_info">
                            <a href="/" className="books-item_title">title</a>
                            <p className="books-item_desc">description</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="footer-column">
                    <div className="footer-item">
                        <p>
                            Opis strony
                        </p>
                    </div>

                </div>
                <p className="footerm-copy"> Strona stworzona na potrzeby portfolio</p>
            </footer>
        </>
    )
}