
import insta from "../images/insta.webp";
import twitter from "../images/twitter.webp";
import facebook from "../images/facebook.webp";
import github from "../images/github.webp";
import linkedin from "../images/linkedin.webp";


export const Footer = ()=>{
    return(
        <footer>
            <div className="socials">
                <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/avd.dima03/"><img alt="Instagram" src={insta}/></a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/people/Dmytro-Avdieienko/100009028267852/"><img alt="Facebook"src={facebook}/></a>
                <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/avdima03"><img alt="Twitter" src={twitter}/></a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/dmytro-avdieienko-843324217/"><img alt="Linkedin" src={linkedin}/></a>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/Avdieienko"><img alt="Linkedin" src={github}/></a>
            </div>
            <h4 >Designed & Built by <a className="signature" href="/">Dmytro Avdieienko</a></h4>
        </footer>
    )

}

export const DesktopFooter = ()=>{
    return(
        <div className="desktop_footer">
            <a className="top_animation delay-4" rel="noopener noreferrer" target="_blank" href="https://github.com/Avdieienko"><img alt="Github" src={github}/></a>
            <a className="top_animation delay-3" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/dmytro-avdieienko-843324217/"><img alt="Linkedin" src={linkedin}/></a>
            <a className="top_animation delay-2" rel="noopener noreferrer" target="_blank" href="https://twitter.com/avdima03"><img alt="Twitter" src={twitter}/></a>
            <a className="top_animation delay-1" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/people/Dmytro-Avdieienko/100009028267852/"><img alt="Facebook" src={facebook}/></a>
            <a className="top_animation" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/avd.dima03/"><img alt="Instagram" src={insta}/></a>
            <hr/>
        </div>
    )
}