import contactMe from "../images/contact_me.svg";
import "../styles/Header.css"


export const Header = ()=>{
    return(
    <header>
        <div>
            <a href="/">
                <h1 className="header_logo">VDNK</h1>
            </a>
            <a href="mailto:avdieienko.d@gmail.com">
                <img className="contact_me" alt="Contact me" src={contactMe}></img>
            </a>
        </div>
    </header>
    )
}