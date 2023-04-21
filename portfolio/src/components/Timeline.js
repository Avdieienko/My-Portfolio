import gymnasium from "../images/gymnasium.webp";
import uni_logo from "../images/uni_logo.webp";
import {VisibilityDiv } from "./OnScreen";
import "../styles/Timeline.css"




export const Timeline = ()=>{
    return(
        <section className="timeline_section">
            <VisibilityDiv classname="bottom_animation">
                <h1>Timeline</h1>
            </VisibilityDiv>
            <div className="timeline">
                <VisibilityDiv classname="time_data time_left left_animation">
                        <div className="time_text">
                            <h2>Gymnasium A+</h2>
                            <h3>2022</h3>
                            <p>Graduated from High School at Gymnasium A+, a private school in Kyiv, Ukraine, near the top of my class.</p>
                        </div>
                        <div>
                            <img alt="Gymnasium A+" src={gymnasium} className="time_img"/>
                        </div>
                </VisibilityDiv>
                <VisibilityDiv classname="time_data time_right left_animation">
                        <div className="time_text">
                            <h2>University of Southampton</h2>
                            <h3>2022-23</h3>
                            <p>Currently undergoing Undergraduate Foundation Programme at University of Southampton, top 10 UK University for Computer Science and Engineering</p>
                        </div>
                        <div>
                            <img alt="University of Southampton" src={uni_logo} className="time_img"/>
                        </div>
                </VisibilityDiv>
                <VisibilityDiv classname="time_data time_left left_animation">
                        <div className="time_text">
                            <h2>University of Southampton</h2>
                            <h3>2023-26</h3>
                            <p>Will be doing Bsc Computer Science starting from 2023</p>
                        </div>
                        <div>
                            <img alt="University of Southampton" src={uni_logo} className="time_img"/>
                        </div>
                </VisibilityDiv>
            </div>
        </section>
    )
}