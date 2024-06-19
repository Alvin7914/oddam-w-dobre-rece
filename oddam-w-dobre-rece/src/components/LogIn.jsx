import React, {useEffect} from "react";
import Navigation from "./Navigation.jsx";
import lineSvg from "../assets/Decoration.svg"
import {Link} from "react-router-dom";
import validateEmail from '../js/utils.jsx';

const LogIn = () => {

    useEffect(() => {
        const NavLoginBtn = document.querySelector('.nav-login-btn');
        const NavWhatIsItAboutBtn = document.querySelector('.nav-what-is-it-about');
        const NavAboutUs = document.querySelector('.nav-about-us');
        const NavFoundations = document.querySelector('.nav-foundations');
        const NavContact = document.querySelector('.nav-contact');

        NavLoginBtn.classList.add('disabled-link');
        NavWhatIsItAboutBtn.classList.add('disabled-link');
        NavAboutUs.classList.add('disabled-link');
        NavFoundations.classList.add('disabled-link');
        NavContact.classList.add('disabled-link');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const inputEmail = document.querySelector('#input-login-email');
        const inputPassword = document.querySelector('#input-login-password');

        const inputEmailV = document.querySelector('#input-login-email').value;
        const inputPasswordV = document.querySelector('#input-login-password').value;

        const errorEmail = document.querySelector('.error-email');
        const errorPassword = document.querySelector('.error-password');

        let errors = [];

        [errorEmail, errorPassword].forEach(item => item.classList.add('d-none'));
        inputEmail.classList.remove('error-border');
        inputPassword.classList.remove('error-border');

        // walidacja
        if (!inputEmailV || validateEmail(inputEmailV) === null) {
            const error1 = 1;
            errors.push(error1);
        }

        if (!inputPasswordV || inputPasswordV.length < 6) {
            const error2 = 2;
            errors.push(error2);
        }

        //poprawna i niepoprawna walidacja
        if (errors.length === 0) {
            localStorage.setItem('email', JSON.stringify(inputEmailV));
            localStorage.setItem('password', JSON.stringify(inputPasswordV));
            window.location.href = '/';
        } else {
            if (errors.includes(1)) {
                errorEmail.classList.remove('d-none');
                inputEmail.classList.add('error-border');
            }

            if (errors.includes(2)) {
                errorPassword.classList.remove('d-none');
                inputPassword.classList.add('error-border');
            }
        }
    }

    return (
        <>
            <Navigation />
            <section className='login'>
                <h2>Zaloguj się</h2>
                <img src={lineSvg} alt="decorative-line"/>
                <form className='login-form' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="input-login-email">Email</label>
                        <input id='input-login-email' type="email"/>
                        <p className='error-msg d-none error-email'>Podany email jest nieprawidłowy!</p>
                        <label htmlFor="input-login-password">Hasło</label>
                        <input id='input-login-password' type="password"/>
                        <p className='error-msg d-none error-password'>Podane hasło jest za krótkie!</p>
                    </div>
                    <div>
                        <Link to='/rejestracja' className='register-btn'>Załóż konto</Link>
                        <button type='submit' className='login-btn'>Zaloguj się</button>
                    </div>
                </form>

            </section>
        </>
    )
}

export default LogIn;