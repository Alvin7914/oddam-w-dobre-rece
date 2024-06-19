import React, {useEffect} from "react";
import Navigation from "./Navigation.jsx";
import lineSvg from "../assets/Decoration.svg"
import {Link} from "react-router-dom";

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

    return (
        <>
            <Navigation />
            <section className='login'>
                <h2>Zaloguj się</h2>
                <img src={lineSvg} alt="decorative-line"/>
                <form className='login-form'>
                    <label htmlFor="input-login-email">Email</label>
                    <input id='input-login-email' type="email"/>
                    <p className='error-msg d-none'>Podany email jest nieprawidłowy!</p>
                    <label htmlFor="input-login-password">Hasło</label>
                    <input id='input-login-password' type="password"/>
                    <p className='error-msg d-none'>Podane hasło jest za krótkie!</p>
                </form>
                <div>
                    <Link to='/rejestracja' className='register-btn'>Załóż konto</Link>
                    <Link to='/' className='login-btn'>Zaloguj się</Link>
                </div>
            </section>
        </>
    )
}

export default LogIn;