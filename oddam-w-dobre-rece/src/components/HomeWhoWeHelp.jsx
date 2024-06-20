import React, {useState} from "react";
import lineSvg from "../assets/Decoration.svg"


const HomeWhoWeHelp = () => {

    const [lastClicked, setLastClicked] = useState(1);

    const handleClick = (e) => {
        if (e.target.id === 'foundations') {
            console.log('Kliknięto fundacje');
            setLastClicked(1);
        } else if (e.target.id === 'organizations') {
            console.log('Kliknięto organizacje pozarządowe');
            setLastClicked(2);
        } else {
            console.log('Kliknięto lokalne zbiórki');
            setLastClicked(3);
        }
    }

    return (
        <section className='who-we-help' id='who-we-help'>
            <h2>Komu pomagamy?</h2>
            <img src={lineSvg} alt="decorative-line"/>
            <div className='who-we-help__btns-box'>
                <ul>
                    <li className={lastClicked === 1 ? 'who-we-help__active' : ''} id='foundations' onClick={handleClick}>Fundacjom</li>
                    <li className={lastClicked === 2 ? 'who-we-help__active' : ''} id='organizations' onClick={handleClick}>Organizacjom<br/>pozarządowym</li>
                    <li className={lastClicked === 3 ? 'who-we-help__active' : ''} id='locals' onClick={handleClick}>Lokalnym<br/>zbiórkom</li>
                </ul>
            </div>
        </section>
    )
}

export default HomeWhoWeHelp;