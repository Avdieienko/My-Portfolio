import React from "react";
import logo from "./images/logo.svg";
import contactMe from "./images/contact_me.svg";
import portrait_main from "./images/portrait.svg";
import insta from "./images/insta.png";
import twitter from "./images/twitter.png";
import facebook from "./images/facebook.png";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import f1_car from "./images/f1_car.png";
import ball from "./images/ball.png";
import greeting_portrait from "./images/greeting_portrait.png";
import flag from "./images/flag.png";
import python from "./images/python.png";
import html from "./images/html.png";
import git from "./images/git.png";
import javascript from "./images/javascript.png";
import css from "./images/css.png";
import cplus from "./images/c++.png";
import java from "./images/java.png";
import react_png from "./images/react.png";
import Python3 from "./images/Python3.webp";
import gymnasium from "./images/gymnasium.webp";
import uni_logo from "./images/uni_logo.webp";
import {FadeUp, FadeLeft } from "./OnScreen";


export const Main = () =>{
    return(
        <>
                {/* ---------------------Desktop_footer----------------------- */}
                <div className="desktop_footer">
                    <a className="top_animation delay-4" rel="noopener noreferrer" target="_blank" href="https://github.com/Avdieienko"><img alt="Github" src={github}/></a>
                    <a className="top_animation delay-3" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/dmytro-avdieienko-843324217/"><img alt="Linkedin" src={linkedin}/></a>
                    <a className="top_animation delay-2" rel="noopener noreferrer" target="_blank" href="https://twitter.com/avdima03"><img alt="Twitter" src={twitter}/></a>
                    <a className="top_animation delay-1" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/people/Dmytro-Avdieienko/100009028267852/"><img alt="Facebook" src={facebook}/></a>
                    <a className="top_animation" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/avd.dima03/"><img alt="Instagram" src={insta}/></a>
                    <hr/>
                </div>
                {/* ---------------------Header----------------------- */}
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
                {/* ---------------------Main----------------------- */}
                <main>
                    <section className="welcome_section">
                        <div className="portrait_wrapper">
                            <FadeUp>
                                <img className="portrait" alt="Portrait" src={portrait_main}></img>
                            </FadeUp>
                            <img className="ball" alt="Ball" src={ball}></img>
                            <img className="car" alt="Car" src={f1_car}></img>
                        </div>
                        <div className="greeting_wrapper">
                        <FadeUp>
                            <h1 className="greeting">Hi, my name is</h1>
                            <h1 className="name">Dmytro Avdieienko</h1>
                            <h3 className="degree">Bsc Computer Science, Soton '23</h3>
                        </FadeUp>
                        </div>
                    </section>
                    <section className="scroll_wrapper">
                                <h3 className="scroll_animation">SCROLL</h3>
                                <hr className="scroll_animation"/>
                    </section>
                    <section className="aboutme_section">
                        <FadeUp>
                            <h1>About me</h1>
                        </FadeUp>
                        <FadeUp>
                        <p className="about_me">
                            Born in Kyiv, Ukraine.<img alt="Ukrainian flag" src={flag}/> I am 17 years old and studying at the University of Southampton.<br/><br/>
                            My interests include software engineering, artificial intelligence, and machine learning.
                            Python developer, Software developer, Web developer Intern.<br/><br/>
                            Undergoing UFP at Soton with progression degree as Bsc Computer Science. Plans include Meng in Artificial Intelligence.🖥️
                        </p>
                        </FadeUp>
                        <img alt="Greeting portrait"className="greeting_portrait" src={greeting_portrait}></img>
                    </section>
                    <section className="skills_section">
                        <FadeUp>
                        <h1>Skills</h1>
                        </FadeUp>
                        <div className="skills">
                            <FadeUp>
                            <img className="skill" alt="" src={cplus}/>
                            </FadeUp>
                            <FadeUp>
                            <img className="skill" alt="" src={java}/>
                            </FadeUp>
                            <FadeUp>
                            <img className="skill" alt="" src={python}/>
                            </FadeUp>
                            <FadeUp>
                            <img className="skill" alt="" src={javascript}/>
                            </FadeUp>
                            <FadeUp>
                            <img className="skill" alt="" src={react_png}/>
                            </FadeUp>
                            <FadeUp>
                            <img className="skill" alt="" src={html}/>
                            </FadeUp>
                            <FadeUp>
                            <img className="skill" alt="" src={css}/>
                            </FadeUp>
                            <FadeUp>
                            <img className="skill" alt="" src={git}/>
                            </FadeUp>
                        </div>
                    </section>
                    <section className="certificates_section">
                        <FadeUp>
                            <h1>Certificates</h1>
                        </FadeUp>
                        <div className="certificates">
                            <FadeUp>
                                <div className="certificate">
                                    <img alt ="" className="certificate_image" src={Python3}/>
                                    <h2 className="certificate_name">Certificate name</h2>
                                    <h3 className="certificate_uni">University</h3>
                                </div>
                            </FadeUp>
                            <FadeUp>
                                <div className="certificate">
                                    <img alt ="" className="certificate_image" src={Python3}/>
                                    <h2 className="certificate_name">Certificate name</h2>
                                    <h3 className="certificate_uni">University</h3>
                                </div>
                            </FadeUp>
                            <FadeUp>
                                <div className="certificate">
                                    <img alt ="" className="certificate_image" src={Python3}/>
                                    <h2 className="certificate_name">Certificate name</h2>
                                    <h3 className="certificate_uni">University</h3>
                                </div>
                            </FadeUp>
                            <FadeUp>
                                <div className="certificate">
                                    <img alt ="" className="certificate_image" src={Python3}/>
                                    <h2 className="certificate_name">Certificate name</h2>
                                    <h3 className="certificate_uni">University</h3>
                                </div>
                            </FadeUp>
                            <FadeUp>
                                <div className="certificate">
                                    <img alt ="" className="certificate_image" src={Python3}/>
                                    <h2 className="certificate_name">Certificate name</h2>
                                    <h3 className="certificate_uni">University</h3>
                                </div>
                            </FadeUp>
                            <FadeUp>
                                <div className="certificate">
                                    <img alt ="" className="certificate_image" src={Python3}/>
                                    <h2 className="certificate_name">Certificate name</h2>
                                    <h3 className="certificate_uni">University</h3>
                                </div>
                            </FadeUp>
                        </div>
                        <FadeUp>
                                <a rel="noopener noreferrer" target="_blank" href="https://www.coursera.org/user/ab73ee8c75b35fed6edaa053000e7cb4" className="certificates_button">See more</a>
                        </FadeUp>
                    </section>
                    <section className="timeline_section">
                        <h1>Timeline</h1>
                        <div className="timeline">
                            <FadeLeft>
                                <div className="time_data left">
                                    <div className="time_text">
                                        <h2>Gymnasium A+</h2>
                                        <h3>2022</h3>
                                        <p>Graduated from High School at Gymnasium A+, a private school in Kyiv, Ukraine, near the top of my class.</p>
                                    </div>
                                    <div>
                                        <img alt="" src={gymnasium} className="time_img"/>
                                    </div>
                                </div>
                            </FadeLeft>
                            <FadeLeft>
                                <div className="time_data right">
                                    <div className="time_text">
                                        <h2>University of Southampton</h2>
                                        <h3>2022-23</h3>
                                        <p>Currently undergoing Undergraduate Foundation Programme at University of Southampton, top 10 UK University for Computer Science and Engineering</p>
                                    </div>
                                    <div>
                                        <img alt="" src={uni_logo} className="time_img"/>
                                    </div>
                                </div>
                            </FadeLeft>
                            <FadeLeft>
                                <div className="time_data left">
                                    <div className="time_text">
                                        <h2>University of Southampton</h2>
                                        <h3>2023-26</h3>
                                        <p>Will be doing Bsc Computer Science starting from 2023</p>
                                    </div>
                                    <div>
                                        <img alt="" src={uni_logo} className="time_img"/>
                                    </div>
                                </div>
                            </FadeLeft>
                        </div>
                    </section>
                </main>
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
        </>
    )
}