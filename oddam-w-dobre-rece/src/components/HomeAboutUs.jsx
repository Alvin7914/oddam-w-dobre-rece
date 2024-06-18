import React from "react";
import lineSvg from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";

const HomeAboutUs = () => {
    return (
        <section className='about-us' id='about-us'>
            <div className='about-us__left-column'>
                <h2>O nas</h2>
                <img src={lineSvg} alt="decorative-line"/>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                    black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={signature} alt="signature"/>
            </div>
            <div className="about-us__right-img"></div>
        </section>
    )
}

export default HomeAboutUs;