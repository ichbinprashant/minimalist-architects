import React from "react";
import{FaBars, FaTwitter, FaLinkedin, FaInstagram, FaFacebook} from "react-icons/fa"
export default function Footer(){
    return(
        <div className="footer">
            <h5 >Follow us on : </h5>
            <div >
                <ul className="footer-icons">
                    <li className="twitter">
                        <a href="https://www.twitter.com"><FaTwitter /></a>
                    </li >
                    <li className="instagram">
                        <a href="https://www.instagram.com"><FaInstagram /></a>
                    </li>
                    <li className="linkedin">
                        <a href="https://www.linkedin.com"><FaLinkedin /></a>
                    </li>
                    <li className="facebook">
                        <a href="https://www.facebook.com"><FaFacebook /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}