import React, { useState, useEffect} from "react";
import Navigation from "./Navigation.jsx";
import lineSvg from "../assets/Decoration.svg"
import {Link} from "react-router-dom";

const HomeHeader = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('email') !== null) {
            setIsLoggedIn(true)
        }
    }, []);

    return (
        <header className='header'>
            <div className="hero-image"></div>
            <div>
                <Navigation/>
                <div className='home__header'>
                    <h1>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={lineSvg} alt="decorative-line"/>
                    <div className='home__header-btns'>
                        <Link className='header-btn1' to={isLoggedIn ? '/oddaj-rzeczy' : '/logowanie'}>ODDAJ<br />RZECZY</Link>
                        <Link className='header-btn2' to={isLoggedIn ? '/oddaj-rzeczy' : '/logowanie'}>ZORGANIZUJ ZBIÓRKĘ</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader;