import greeting_portrait from "../images/greeting_portrait.webp";
import flag from "../images/flag.png";
import {VisibilityDiv } from "./OnScreen";
import "../styles/AboutMe.css"



export const AboutMe = ()=>{
    return(
        <section className="aboutme_section">
            <VisibilityDiv classname="bottom_animation">
                <h1>About me</h1>
            </VisibilityDiv>
            <VisibilityDiv classname="bottom_animation">
            <p className="about_me">
                Born in Kyiv, Ukraine.<img alt="Ukrainian flag" src={flag}/> I am a computer science student at the University of Southampton.<br/><br/>
                Keen on software engineering, artificial intelligence, and machine learning.
                Hard-working, ambitious and flexible.<br/><br/>
                Undergoing Bsc Computer Science.🖥️<br/><br/>
                Looking for a Computer Science Internship.
            </p>
            </VisibilityDiv>
            <img alt="Greeting portrait"className="greeting_portrait" src={greeting_portrait}></img>
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/dmytro-avdieienko-843324217/" className="link_button">My LinkedIn</a>
        </section>
    )
}