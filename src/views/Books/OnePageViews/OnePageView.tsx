import {Menu} from "../../../common/Menu/Menu";
import {Footer} from "../../../common/Footer/Footer";
import "./OnePageView.css"
import {Link} from "react-router-dom";


const books = {
 title:"Zjedz tę żabę",
     desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsanw vulputate risus non fringilla. Nulla blandit leo id augue dignissim malesuada. Vestibulum pretium efficitur nunc, bibendum porttitor turpis vulputate quis. Morbi tincidunt consectetur laoreet. Maecenas quis varius mauris, eu rhoncus augue. Praesent viverra ac urna ac convallis. Integer ac magna neque. Aliquam aliquam condimentum elit. Ut varius metus eget massa placerat, cursus hendrerit tortor rhoncus. Suspendisse bibendum risus vel viverra ullamcorper. Aliquam sagittis, nibh luctus commodo pulvinar, mi ante semper lorem, non luctus sem massa in justo. Nulla facilisi. Cras ac risus magna. Vestibulum eu rhoncus lorem. Integer ornare diam sed orci fringilla pretium.",

    img:
        {
            name: 'testb.jpg',
            alt: "test"
        }
}


export const OnePageView = () => {


return (
    <div className="one-page-view">
        <Menu/>
        <div className="book-section">
            <div className="book-item">
                <div className="book-item_img">
                    <img src={`/img/${books.img.name}`} alt={books.img.alt}/>
                </div>
                <div className="book-item__info">
                    <h1>{books.title}</h1>
                    <div className="book-item__rates">
                        <div className="book-item__rate">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa-solid fa-star-half"></i>
                        </div>
                        <p>4.5</p>
                    </div>
                    <p>{books.desc}</p>
                    <div className="book-item_opinions">
                        <div className="book-item_opinion">
                            <p className="book-item_opinion_author">Roman Roman</p>
                            <p className="book-item_opinion_desc">lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                        </div>
                        <div className="book-item_opinion">
                            <p className="book-item_opinion_author">Roman Roman</p>
                            <p className="book-item_opinion_desc">lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                        </div>
                    </div>
                    <div className="btn">
                        <Link className="btn-back" to={"/"}>Wróc</Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
)
}