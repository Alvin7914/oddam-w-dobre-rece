import React from "react";
import lineSvg from "../assets/Decoration.svg";
import Footer from "./Footer.jsx";


const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <h2>Skontaktuj się z nami</h2>
            <img src={lineSvg} alt="decorative-line"/>
            <form className="contact-form">
                <div>
                    <div className="flex-col input-name-div">
                        <label htmlFor="input-name">Wpisz swoje imię</label>
                        <input id="input-name" type="text" placeholder="Krzysztof"/>
                    </div>
                    <div className="flex-col">
                        <label htmlFor="input-email">Wpisz swój email</label>
                        <input id="input-email" type="email" placeholder="abc@xyz.pl"/>
                    </div>
                </div>
                <label htmlFor="input-textarea">Wpisz swoją wiadomość</label>
                <textarea id="input-textarea"
                          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                <button type='submit'>Wyślij</button>
            </form>
            <Footer/>
        </section>
    )
}

export default Contact;