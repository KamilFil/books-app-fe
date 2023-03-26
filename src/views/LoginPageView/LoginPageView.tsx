import {Menu} from "../../common/Menu/Menu";
import {Footer} from "../../common/Footer/Footer";
import "./LoginPageView.css"
import { useFormik} from "formik";
import {useEffect, useState} from "react";

interface FormValues {
    email: string,
    pass: string,
}

interface ErrorsValues {
    email?: string,
    pass?: string,
}
const RegisterForm = () => {
    const validate = (values: FormValues) => {
        const errors:ErrorsValues = {}
        if(values.email.length < 2) {
            errors.email = 'Email jest wymagany';
        } else if(values.email.indexOf('@') === -1) {
            errors.email = "Email musi zawierać @";
        }
        if(values.pass.length < 6) {
            errors.pass = "Podaj hasło"
        }
        return errors
    }

    const formik = useFormik({initialValues:{email:"", pass:""},
        validate,
        onSubmit: (values:FormValues) => {alert(JSON.stringify(values,null,2))}})

    return (
        <div className="login-panel">
            <div className="login-panel-info">
                <p className="login-panel-info_title">Rejestracja</p>
                <form className="form-login" onSubmit={formik.handleSubmit}>
                    <div className="input-item">
                        <input className={formik.errors.email ? "error" : ""} id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Wpisz email"/>
                        {formik.errors.email ? <p className="error-info">{formik.errors.email}</p> : null}
                    </div>
                    <div className="input-item">
                        <input className={formik.errors.pass ? "error" : ""} id="pass" name="pass" type="passwords" onChange={formik.handleChange} value={formik.values.pass} placeholder="Wpisz hasło"/>
                        {formik.errors.pass ? <p className="error-info">{formik.errors.pass}</p> : null}
                    </div>
                    <div className="input-item">
                        <input className={formik.errors.pass ? "error" : ""} id="pass" name="pass" type="passwords" onChange={formik.handleChange} value={formik.values.pass} placeholder="Wpisz hasło ponownie"/>
                        {formik.errors.pass ? <p className="error-info">{formik.errors.pass}</p> : null}
                    </div>
                    <button className="btn sing-up" type="submit">Zarejestruj się</button>
                </form>
                <p></p>
            </div>
        </div>
    )
}

const FormLogin = () => {
    const validate = (values: FormValues) => {
        const errors:ErrorsValues = {}
        if(values.email.length < 2) {
            errors.email = 'Email jest wymagany';
        } else if(values.email.indexOf('@') === -1) {
            errors.email = "Email musi zawierać @";
        }
        if(values.pass.length < 6) {
            errors.pass = "Podaj hasło"
        }
        return errors
    }

    const formik = useFormik({initialValues:{email:"", pass:""},
        validate,
        onSubmit: (values:FormValues) => {alert(JSON.stringify(values,null,2))}})

    return (
    <div className="login-panel">
        <div className="login-panel-info">
            <p className="login-panel-info_title">Logowanie</p>
            <form className="form-login" onSubmit={formik.handleSubmit}>
                <div className="input-item">
                    <input className={formik.errors.email ? "error" : ""} id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Wpisz email"/>
                    {formik.errors.email ? <p className="error-info">{formik.errors.email}</p> : null}
                </div>
                <div className="input-item">
                    <input className={formik.errors.pass ? "error" : ""} id="pass" name="pass" type="passwords" onChange={formik.handleChange} value={formik.values.pass} placeholder="Wpisz hasło"/>
                    {formik.errors.pass ? <p className="error-info">{formik.errors.pass}</p> : null}
                </div>
                <button className="btn sing-up" type="submit">Zaloguj się</button>
            </form>
            <p></p>
        </div>
    </div>
)
}


export const LoginPageView = () => {
    const [formChange, setFormChange] = useState<Boolean>(true)

    const changeForm = () => {
        setFormChange(prevState => !prevState)
    }
    return (
        <div className="login-page">
            <Menu/>

            <div className="login-page_section">
                <div className="login-info">
                    <img src="img/logo.png"/>
                    <h1>Witaj,</h1>
                    <p>Zaloguj się aby dodać swoją książkę.</p>
                    <p>Jeśli nie masz konta, to załóż je.</p>
                    <button className="sing-up" onClick={changeForm}>{formChange ? "Zarejestruj się" : 'Zaloguj się'}</button>
                </div>
                {formChange ? <FormLogin/> : <RegisterForm/>}
            </div>
            <Footer/>
        </div>
    )
}