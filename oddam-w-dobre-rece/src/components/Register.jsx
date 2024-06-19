import React, {useEffect} from "react";
import Navigation from "./Navigation.jsx";
import {Link} from "react-router-dom";
import lineSvg from "../assets/Decoration.svg";
import validateEmail from '../js/utils.jsx';

const Register = () => {

    useEffect(() => {
        const NavRegisterBtn = document.querySelector('.nav-register-btn');
        const NavWhatIsItAboutBtn = document.querySelector('.nav-what-is-it-about');
        const NavAboutUs = document.querySelector('.nav-about-us');
        const NavFoundations = document.querySelector('.nav-foundations');
        const NavContact = document.querySelector('.nav-contact');

        NavRegisterBtn.classList.add('disabled-link');
        NavWhatIsItAboutBtn.classList.add('disabled-link');
        NavAboutUs.classList.add('disabled-link');
        NavFoundations.classList.add('disabled-link');
        NavContact.classList.add('disabled-link');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const inputEmail = document.querySelector('#input-register-email');
        const inputPassword = document.querySelector('#input-register-password');
        const inputRepeatPassword = document.querySelector('#input-register-repeat-password');

        const inputEmailV = document.querySelector('#input-register-email').value;
        const inputPasswordV = document.querySelector('#input-register-password').value;
        const inputRepeatPasswordV = document.querySelector('#input-register-repeat-password').value;

        const errorEmail = document.querySelector('.error-email-2');
        const errorPassword = document.querySelector('.error-password-2');
        const errorRepeatPassword = document.querySelector('.error-repeat-password');

        let errors = [];

        [errorEmail, errorPassword, errorRepeatPassword].forEach(item => item.classList.add('d-none'));
        inputEmail.classList.remove('error-border');
        inputPassword.classList.remove('error-border');
        inputRepeatPassword.classList.remove('error-border');

        //walidacja
        if (!inputEmailV || validateEmail(inputEmailV) === null) {
            const error1 = 1;
            errors.push(error1);
        }

        if (!inputPasswordV || inputPasswordV.length < 6) {
            const error2 = 2;
            errors.push(error2);
        }

        if (!inputRepeatPasswordV || inputRepeatPasswordV !== inputPasswordV) {
            const error3 = 3;
            errors.push(error3);
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

            if (errors.includes(3)) {
                errorRepeatPassword.classList.remove('d-none');
                inputRepeatPassword.classList.add('error-border');
            }
        }
    }

    return (
        <>
            <Navigation/>
            <section className='register'>
                <h2>Załóż konto</h2>
                <img src={lineSvg} alt="decorative-line"/>
                <form className='register-form' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="input-register-email">Email</label>
                        <input id='input-register-email' type="email"/>
                        <p className='error-msg d-none error-email-2'>Podany email jest niepoprawny!</p>
                        <label htmlFor="input-register-password">Hasło</label>
                        <input id='input-register-password' type="password"/>
                        <p className='error-msg d-none error-password-2'>Podane hasło jest za krótkie!</p>
                        <label htmlFor="input-register-repeat-password">Powtórz hasło</label>
                        <input id='input-register-repeat-password' type="password"/>
                        <p className='error-msg d-none error-repeat-password'>Podane hasło nie jest takie samo jak
                            wyżej!</p>
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