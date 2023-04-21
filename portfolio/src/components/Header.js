import logo from "../images/logo.svg";
import contactMe from "../images/contact_me.svg";

export const Header = ()=>{
    return(
    <header>
        <div>
            <a href="/">
                <img className="logo top_animation" alt="logo" src={logo}></img>
            </a>
            <a href="mailto:avdieienko.d@gmail.com">
                <img className="contact_me top_animation" alt="Contact me" src={contactMe}></img>
            </a>
        </div>
    </header>
    )
}