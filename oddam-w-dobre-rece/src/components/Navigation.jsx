import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";


const Navigation = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('email') !== null) {
            setIsLoggedIn(true)
        }
    }, []);

    return (
        <nav>
            <ul className='login-list'>
                <li className="login-item"><Link to='/logowanie' className='nav-login-btn'>Zaloguj</Link></li>
                <li className="login-item"><Link to='/rejestracja' className='nav-register-btn'>Załóż konto</Link></li>
            </ul>
            <ul className="nav-list">
                <li className="nav-item"><Link to='/'>Start</Link></li>
                <li className="nav-item"><ScrollLink className='nav-what-is-it-about' to='simple-steps' smooth={true} duration={500}>O co chodzi?</ScrollLink></li>
                <li className="nav-item"><ScrollLink className='nav-about-us' to='about-us' smooth={true} duration={500}>O nas</ScrollLink></li>
                <li className="nav-item"><ScrollLink className='nav-foundations' to='who-we-help' smooth={true} duration={500}>Fundacja i organizacje</ScrollLink></li>
                <li className="nav-item"><ScrollLink className='nav-contact' to='contact' smooth={true} duration={500}>Kontakt</ScrollLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;