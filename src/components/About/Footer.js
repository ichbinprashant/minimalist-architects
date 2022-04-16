import React from "react";
import{ FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaMapMarkerAlt, FaPinterest, FaTumblrSquare} from "react-icons/fa"
export default function Footer(){
    return(
        <div className="footer">

            
            <div className="footer-col" >
                {/* <h5 >Follow us</h5> */}
                <ul className="footer-icons">
                    <li  className='email'>
                        <a href="mailto:theminimalistarchitects@gmail.com"><FaEnvelope /></a>
                    </li>
                    <li className="twitter">
                        <a href="https://twitter.com/thearminimalist"><FaTwitter /></a>
                    </li >
                    <li className="instagram">
                        <a href="https://www.instagram.com/theminimalistarchitects/"><FaInstagram /></a>
                    </li>
                    <li className="linkedin">
                        <a href="https://www.linkedin.com/in/the-minimalist-architects-6109a7237/"><FaLinkedin /></a>
                    </li>
                    <li className="facebook">
                        <a href="https://www.facebook.com/The-Minimalist-Architects-110420181641243"><FaFacebook /></a>
                    </li>
                    <li>
                        <a href="https://in.pinterest.com/theminimalistarchitects/_saved/"><FaPinterest /></a>
                    </li>
                    <li>
                        <a href="https://www.tumblr.com/blog/view/theminimalistarchitects"><FaTumblrSquare /></a>
                    </li>
                </ul>
                <h6 className="location"><FaMapMarkerAlt />&emsp;Namchi, Sikkim</h6>
            </div>
            
        </div>
    )
}
