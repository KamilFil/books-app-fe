import {Menu} from "../../../common/Menu/Menu";
import {Footer} from "../../../common/Footer/Footer";
import "./AddedBooksView.css";
import {FormBook} from "../../../common/Form/FormBooks/FormBook";


export const AddedBooksView = () => {

    return (
    <div className="add-book-page">
        <Menu/>
        <FormBook/>
        <Footer/>
    </div>
    )
}