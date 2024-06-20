import React, {useEffect, useState} from "react";
import lineSvg from "../assets/Decoration.svg";
import shirtSvg from "../assets/Icon-1.svg";
import bagSvg from "../assets/Icon-2.svg";
import searchSvg from "../assets/Icon-3.svg";
import arrowsSvg from "../assets/Icon-4.svg";
import {Link} from "react-router-dom";

const HomeSimpleSteps = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('email') !== null) {
            setIsLoggedIn(true)
        }
    }, []);

    return (
        <section className='simple-steps' id='simple-steps'>
            <h2>Wystarczą 4 proste kroki</h2>
            <img src={lineSvg} alt="decorative-line"/>
            <div className='four-columns'>
                <div>
                    <img src={shirtSvg} alt="shirt"/>
                    <p className='after-line1'>Wybierz rzeczy</p>
                    <p>ubrania, zabawki,<br/>sprzęt i inne</p>
                </div>
                <div>
                    <img src={bagSvg} alt="bag"/>
                    <p className='after-line1'>Spakuj je</p>
                    <p>skorzystaj z<br/>worków na śmieci</p>
                </div>
                <div>
                    <img src={searchSvg} alt="magnifying-glass"/>
                    <p className='after-line2'>Zdecyduj komu<br />chcesz pomóc</p>
                    <p>wybierz zaufane<br/>miejsce</p>
                </div>
                <div>
                    <img src={arrowsSvg} alt="arrows-in-circle"/>
                    <p className='after-line3'>Zamów kuriera</p>
                    <p>kurier przyjedzie<br/>w dogodnym terminie</p>
                </div>
            </div>
            <Link className='header-btn1' to={isLoggedIn ? '/oddaj-rzeczy' : '/logowanie'}>ODDAJ<br/>RZECZY</Link>
        </section>
    )
}

export default HomeSimpleSteps;