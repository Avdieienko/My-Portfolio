import python from "../images/python.webp";
import html from "../images/html.webp";
import git from "../images/git.webp";
import javascript from "../images/javascript.webp";
import css from "../images/css.webp";
import cplus from "../images/c++.webp";
import java from "../images/java.webp";
import react_png from "../images/react.webp";
import { VisibilityDiv } from "./OnScreen";
import "../styles/Skills.css"


export const Skills =()=>{
    return(
        <section className="skills_section">
            <VisibilityDiv classname="bottom_animation">
            <h1>Skills</h1>
            </VisibilityDiv>
            <div className="skills">
                <VisibilityDiv classname="bottom_animation">
                    <img className="skill" alt="C++" src={cplus}/>
                </VisibilityDiv>
                <VisibilityDiv classname="bottom_animation">
                    <img className="skill" alt="Java" src={java}/>
                </VisibilityDiv>
                <VisibilityDiv classname="bottom_animation">
                    <img className="skill" alt="Python" src={python}/>
                </VisibilityDiv>
                <VisibilityDiv classname="bottom_animation">
                    <img className="skill" alt="Javascript" src={javascript}/>
                </VisibilityDiv>
                <VisibilityDiv classname="bottom_animation">
                    <img className="skill" alt="React" src={react_png}/>
                </VisibilityDiv>
                <VisibilityDiv classname="bottom_animation">
                    <img className="skill" alt="HTML" src={html}/>
                </VisibilityDiv>
                <VisibilityDiv classname="bottom_animation">
                    <img className="skill" alt="CSS" src={css}/>
                </VisibilityDiv>
                <VisibilityDiv classname="bottom_animation">
                    <img className="skill" alt="Git" src={git}/>
                </VisibilityDiv>
            </div>
        </section>
    )
}