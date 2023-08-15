import {BsInstagram, BsFacebook, BsTwitter, BsLinkedin, BsGithub} from "react-icons/bs"
import "../styles/Footer.css"



export const Footer = ()=>{
    return(
        <footer>
            <div className="socials">
                <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/avd.dima03/">
                    <BsInstagram color="#BAFF39" size={25}/>
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/people/Dmytro-Avdieienko/100009028267852/">
                    <BsFacebook color="#BAFF39" size={25}/>
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/avdima03">
                    <BsTwitter color="#BAFF39" size={25}/>
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/dmytro-avdieienko-843324217/">
                    <BsLinkedin color="#BAFF39" size={25}/>
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/Avdieienko">
                    <BsGithub color="#BAFF39" size={25}/>
                </a>
            </div>
            <h4 >Designed & Built by <a className="signature" href="/">VDNK</a></h4>
        </footer>
    )

}

export const DesktopFooter = ()=>{
    return(
        <div className="desktop_footer">
            <a className="top_animation delay-4" rel="noopener noreferrer" target="_blank" href="https://github.com/Avdieienko">
                <BsGithub color="#BAFF39" size={30}/>
            </a>
            <a className="top_animation delay-3" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/dmytro-avdieienko-843324217/">
                <BsLinkedin color="#BAFF39" size={30}/>
            </a>
            <a className="top_animation delay-2" rel="noopener noreferrer" target="_blank" href="https://twitter.com/avdima03">
                <BsTwitter color="#BAFF39" size={30}/>
            </a>
            <a className="top_animation delay-1" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/people/Dmytro-Avdieienko/100009028267852/">
                <BsFacebook color="#BAFF39" size={30}/>
            </a>
            <a className="top_animation" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/avd.dima03/">
                <BsInstagram color="#BAFF39" size={30}/>
            </a>
            <hr/>
        </div>
    )
}