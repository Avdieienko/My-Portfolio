import {BiLogoJava, BiLogoReact, BiLogoHtml5,BiLogoCss3, BiLogoPython,BiLogoJavascript, BiLogoGit, BiLogoCPlusPlus} from "react-icons/bi"
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
                    <BiLogoCPlusPlus className="skill" color="#BAFF39"/>
                </VisibilityDiv>
                <VisibilityDiv classname="bottom_animation">
                    <BiLogoPython className="skill" color="#BAFF39"/>
                </VisibilityDiv>
                <VisibilityDiv classname="bottom_animation">
                    <BiLogoJavascript className="skill" color="#BAFF39"/>
                </VisibilityDiv>
                <VisibilityDiv classname="bottom_animation">
                    <BiLogoReact className="skill" color="#BAFF39"/>
                </VisibilityDiv>
                <VisibilityDiv classname="bottom_animation">
                    <BiLogoJava className="skill" color="#BAFF39"/>
                </VisibilityDiv>
                <VisibilityDiv classname="bottom_animation">
                    <BiLogoHtml5 className="skill" color="#BAFF39"/>
                </VisibilityDiv>
                <VisibilityDiv classname="bottom_animation">
                    <BiLogoCss3 className="skill" color="#BAFF39"/>
                </VisibilityDiv>
                <VisibilityDiv classname="bottom_animation">
                    <BiLogoGit className="skill" color="#BAFF39"/>
                </VisibilityDiv>
            </div>
        </section>
    )
}