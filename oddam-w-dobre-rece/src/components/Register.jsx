import React from "react";
import Navigation from "./Navigation.jsx";
import {Link} from "react-router-dom";
import lineSvg from "../assets/Decoration.svg";
import validateEmail from '../js/utils.jsx';

const Register = () => {

    return (
        <>
            <Navigation />
            <section className='register'>
                <h2>Załóż konto</h2>
                <img src={lineSvg} alt="decorative-line"/>
                <form className='register-form'>
                    <div>
                        <label htmlFor="input-register-email">Email</label>
                        <input id='input-register-email' type="email"/>
                        <p className='error-msg d-none error-email-2'>Podany email jest niepoprawny!</p>
                        <label htmlFor="input-register-password">Hasło</label>
                        <input id='input-register-password' type="password"/>
                        <p className='error-msg d-none error-password-2'>Podane hasło jest za krótkie!</p>
                        <label htmlFor="input-register-repeat-password">Powtórz hasło</label>
                        <input id='input-register-repeat-password' type="password"/>
                        <p className='error-msg d-none error-repeat-password'>Podane hasło nie jest takie samo jak wyżej!</p>
                    </div>
                    <div>
                        <Link to='/logowanie' className='login-btn-2'>Zaloguj się</Link>
                        <button type='submit' className='register-btn-2'>Załóż konto</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register;