import React from "react";
import facebookSvg from "../assets/Facebook.svg"
import instagramSvg from "../assets/Instagram.svg"

const Footer = () => {

    return (
        <section className='footer' id='footer'>
            <p>Copyright by Coders Lab</p>
            <div>
                <img src={facebookSvg} alt="facebook-icon"/>
                <img src={instagramSvg} alt="instagram-icon"/>
            </div>
        </section>
    )
}

export default Footer;