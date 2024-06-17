import React from "react";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";


const Navigation = () => {

    return (
        <nav>
            <ul className='login-list'>
                <li className="login-item"><Link to='/logowanie'>Zaloguj</Link></li>
                <li className="login-item"><Link to='/rejestracja'>Załóż konto</Link></li>
            </ul>
            <ul className="nav-list">
                <li className="nav-item"><Link to='/'>Start</Link></li>
                <li className="nav-item"><ScrollLink to='simple-steps' smooth={true} duration={500}>O co chodzi?</ScrollLink></li>
                <li className="nav-item"><ScrollLink to='about-us' smooth={true} duration={500}>O nas</ScrollLink></li>
                <li className="nav-item"><ScrollLink to='who-we-help' smooth={true} duration={500}>Fundacja i organizacje</ScrollLink></li>
                <li className="nav-item"><ScrollLink to='contact' smooth={true} duration={500}>Kontakt</ScrollLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;