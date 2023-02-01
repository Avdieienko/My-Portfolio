import logo from "./images/logo.svg";
import contactMe from "./images/contact_me.svg";
import portrait_main from "./images/portrait.webp";
import insta from "./images/insta.webp";
import twitter from "./images/twitter.webp";
import facebook from "./images/facebook.webp";
import github from "./images/github.webp";
import linkedin from "./images/linkedin.webp";
import f1_car from "./images/f1_car.png";
import ball from "./images/ball.png";
import greeting_portrait from "./images/greeting_portrait.webp";
import flag from "./images/flag.png";
import python from "./images/python.webp";
import html from "./images/html.webp";
import git from "./images/git.webp";
import javascript from "./images/javascript.webp";
import css from "./images/css.webp";
import cplus from "./images/c++.webp";
import java from "./images/java.webp";
import react_png from "./images/react.webp";
import Python3 from "./images/Python3.webp";
import meta_certificate from "./images/meta_certificate.webp"
import python_web from "./images/python_web.webp"
import harvard_certificate from "./images/harvard_certificate.webp"
import duke_certificate from "./images/duke_certificate.webp"
import gymnasium from "./images/gymnasium.webp";
import uni_logo from "./images/uni_logo.webp";
import {VisibilityDiv } from "./OnScreen";


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
                            <img className="bottom_animation visible portrait" alt="Portrait" src={portrait_main}></img>
                            <img className="ball" alt="Ball" src={ball}></img>
                            <img className="car" alt="Car" src={f1_car}></img>
                        </div>
                        <div className="bottom_animation visible greeting_wrapper">
                            <h1 className="greeting">Hi, my name is</h1>
                            <h1 className="name">Dmytro Avdieienko</h1>
                            <h3 className="visible degree">Bsc Computer Science, Soton '23</h3>
                        </div>
                    </section>
                    <section className="scroll_wrapper">
                                <h3 className="scroll_animation">SCROLL</h3>
                                <hr className="scroll_animation"/>
                    </section>
                    <section className="aboutme_section">
                        <VisibilityDiv classname="bottom_animation">
                            <h1>About me</h1>
                        </VisibilityDiv>
                        <VisibilityDiv classname="bottom_animation">
                        <p className="about_me">
                            Born in Kyiv, Ukraine.<img alt="Ukrainian flag" src={flag}/> I am 17 years old computer science student at the University of Southampton<br/><br/>
                            Keen on software engineering, artificial intelligence, and machine learning.
                            Hard-working and ambitious.<br/><br/>
                            Undergoing UFP at Soton with progression degree as Bsc Computer Science. Plans include Meng in Artificial Intelligence.🖥️
                        </p>
                        </VisibilityDiv>
                        <img alt="Greeting portrait"className="greeting_portrait" src={greeting_portrait}></img>
                    </section>
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
                    <section className="certificates_section">
                        <VisibilityDiv classname="bottom_animation">
                            <h1>Certificates</h1>
                        </VisibilityDiv>
                        <div className="certificates">
                            <VisibilityDiv classname="certificate primary bottom_animation">
                                    <img alt ="Python 3 Programming" className="certificate_image" src={Python3}/>
                                    <h2 className="certificate_name">Python 3 programming</h2>
                                    <h3 className="certificate_uni">University of Michigan</h3>
                            </VisibilityDiv>
                            <VisibilityDiv classname="certificate primary bottom_animation">
                                    <img alt ="Meta Front-End developer" className="certificate_image" src={meta_certificate}/>
                                    <h2 className="certificate_name">Front-End Developer</h2>
                                    <h3 className="certificate_uni">Meta</h3>
                            </VisibilityDiv>
                            <VisibilityDiv classname="certificate bottom_animation">
                                    <img alt ="Using Python for Research" className="certificate_image" src={harvard_certificate}/>
                                    <h2 className="certificate_name">Using Python for Research</h2>
                                    <h3 className="certificate_uni">Harvard University</h3>
                            </VisibilityDiv>
                            <VisibilityDiv classname="certificate bottom_animation">
                                    <img alt ="Java Programming" className="certificate_image" src={duke_certificate}/>
                                    <h2 className="certificate_name">Java programming</h2>
                                    <h3 className="certificate_uni">Duke University</h3>
                            </VisibilityDiv>
                            <VisibilityDiv classname="certificate bottom_animation">
                                    <img alt ="Using Python to Access Web Data" className="certificate_image" src={[python_web]}/>
                                    <h2 className="certificate_name">Using Python to Access Web Data</h2>
                                    <h3 className="certificate_uni">University of Michigan</h3>
                            </VisibilityDiv>
                        </div>
                        <VisibilityDiv classname="bottom_animation">
                                <a rel="noopener noreferrer" target="_blank" href="https://www.coursera.org/user/ab73ee8c75b35fed6edaa053000e7cb4" className="certificates_button">See more</a>
                        </VisibilityDiv>
                    </section>
                    <section className="timeline_section">
                        <VisibilityDiv classname="bottom_animation">
                            <h1>Timeline</h1>
                        </VisibilityDiv>
                        <div className="timeline">
                            <VisibilityDiv classname="time_data left left_animation">
                                    <div className="time_text">
                                        <h2>Gymnasium A+</h2>
                                        <h3>2022</h3>
                                        <p>Graduated from High School at Gymnasium A+, a private school in Kyiv, Ukraine, near the top of my class.</p>
                                    </div>
                                    <div>
                                        <img alt="Gymnasium A+" src={gymnasium} className="time_img"/>
                                    </div>
                            </VisibilityDiv>
                            <VisibilityDiv classname="time_data right left_animation">
                                    <div className="time_text">
                                        <h2>University of Southampton</h2>
                                        <h3>2022-23</h3>
                                        <p>Currently undergoing Undergraduate Foundation Programme at University of Southampton, top 10 UK University for Computer Science and Engineering</p>
                                    </div>
                                    <div>
                                        <img alt="University of Southampton" src={uni_logo} className="time_img"/>
                                    </div>
                            </VisibilityDiv>
                            <VisibilityDiv classname="time_data left left_animation">
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