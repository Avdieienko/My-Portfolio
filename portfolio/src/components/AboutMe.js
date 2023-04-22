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
                Undergoing UFP at Soton with progression degree as Bsc Computer Science. Plans include Meng in Artificial Intelligence.🖥️<br/><br/>
                Looking for a Software Engineer Internship.
            </p>
            </VisibilityDiv>
            <img alt="Greeting portrait"className="greeting_portrait" src={greeting_portrait}></img>
        </section>
    )
}