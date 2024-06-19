import React, {useState, useEffect} from "react";
import lineSvg from "../assets/Decoration.svg";
import Footer from "./Footer.jsx";


const Contact = () => {
    const [errorsArray, setErrorsArray] = useState([]);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const inputName = document.querySelector('#input-name');
        const inputEmail = document.querySelector('#input-email');
        const inputMessage = document.querySelector('#input-message');

        const inputNameV = document.querySelector('#input-name').value;
        const inputEmailV = document.querySelector('#input-email').value;
        const inputMessageV = document.querySelector('#input-message').value;

        const errorName = document.querySelector('.error-name');
        const errorEmail = document.querySelector('.error-email');
        const errorMessage = document.querySelector('.error-message');
        const successfulValidation = document.querySelector('.successful-validation');

        setErrorsArray([]);
        let errors = [];

        //schowanie powiadomień po poprzedniej próbie przesłania formularza
        [errorName, errorEmail, errorMessage].forEach(item => item.classList.add('d-none'));
        successfulValidation.classList.add('hidden');

        // walidacja
        if (!inputNameV || inputNameV.includes(' ')) {
            const error1 = 1;
            setErrorsArray(state => [...state, error1]);
            errors.push(error1);
        }

        if (!inputEmailV || validateEmail(inputEmailV) === null) {
            const error2 = 2;
            setErrorsArray(state => [...state, error2]);
            errors.push(error2);
        }

        if (!inputMessageV || inputMessageV.length < 120) {
            const error3 = 3;
            setErrorsArray(state => [...state, error3]);
            errors.push(error3);
        }

        if (errors.length === 0) {
            successfulValidation.classList.remove('hidden');
            [inputName, inputEmail, inputMessage].forEach(item => item.value = '')
        } else {
            if (errors.includes(1)) {
                errorName.classList.remove('d-none');
            }

            if (errors.includes(2)) {
                errorEmail.classList.remove('d-none');
            }

            if (errors.includes(3)) {
                errorMessage.classList.remove('d-none');
            }
        }
    }

    return (
        <section className='contact' id='contact'>
            <h2>Skontaktuj się z nami</h2>
            <img src={lineSvg} alt="decorative-line"/>
            <p className='successful-validation hidden'>Wiadomość została wysłana! <br />&nbsp;Wkrótce się skontaktujemy.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                    <div className="flex-col input-name-div">
                        <label htmlFor="input-name">Wpisz swoje imię</label>
                        <input id="input-name" type="text" placeholder="Krzysztof"/>
                        <p className='error-name error-msg d-none'>Podane imię jest nieprawidłowe!</p>
                    </div>
                    <div className="flex-col">
                        <label htmlFor="input-email">Wpisz swój email</label>
                        <input id="input-email" type="email" placeholder="abc@xyz.pl"/>
                        <p className='error-email error-msg d-none'>Podany email jest nieprawidłowy!</p>
                    </div>
                </div>
                <label htmlFor="input-message">Wpisz swoją wiadomość</label>
                <textarea id="input-message"
                          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                <p className='error-message error-msg d-none'>Wiadomość musi mieć conajmniej 120 znaków!</p>
                <button type='submit'>Wyślij</button>
            </form>
            <Footer/>
        </section>
    )
}

export default Contact;