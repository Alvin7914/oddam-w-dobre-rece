import React, {useEffect} from "react";
import Navigation from "./Navigation.jsx";
import lineSvg from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

const LogOut = () => {

    useEffect(() => {
        const NavWhatIsItAboutBtn = document.querySelector('.nav-what-is-it-about');
        const NavAboutUs = document.querySelector('.nav-about-us');
        const NavFoundations = document.querySelector('.nav-foundations');
        const NavContact = document.querySelector('.nav-contact');

        NavWhatIsItAboutBtn.classList.add('disabled-link');
        NavAboutUs.classList.add('disabled-link');
        NavFoundations.classList.add('disabled-link');
        NavContact.classList.add('disabled-link');
    }, []);

    return (
        <>
            <Navigation />
            <section className='logout'>
                <h2>Wylogowanie nastąpiło<br />pomyślnie!</h2>
                <img src={lineSvg} alt="decorative-line"/>
                <Link to='/' className='home-btn'>Strona główna</Link>
            </section>
        </>
    )
}

export default LogOut;