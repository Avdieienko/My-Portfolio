import logo from "./images/logo.svg"
import contactMe from "./images/contact_me.svg"
import portrait_main from "./images/portrait.svg"
import insta from "./images/insta.png"
import twitter from "./images/twitter.png"
import facebook from "./images/facebook.png"
import github from "./images/github.png"
import linkedin from "./images/linkedin.png"
import f1_car from "./images/f1_car.png"
import ball from "./images/ball.png"
import greeting_portrait from "./images/greeting_portrait.png"
import flag from "./images/flag.png"
import python from "./images/python.png"
import html from "./images/html.png"
import git from "./images/git.png"
import javascript from "./images/javascript.png"
import css from "./images/css.png"
import cplus from "./images/c++.png"
import java from "./images/java.png"
import react_png from "./images/react.png"
import Python3 from "./images/Python3.webp"
import gymnasium from "./images/gymnasium.webp"
import uni_logo from "./images/uni_logo.webp"


export const Main = () =>{
    return(
        <>
                {/* ---------------------Desktop_footer----------------------- */}
                <div className="desktop_footer">
                    <a href="https://www.instagram.com/avd.dima03/"><img alt="Github" src={github}/></a>
                    <a href="https://www.instagram.com/avd.dima03/"><img alt="Linkedin" src={linkedin}/></a>
                    <a href="https://www.instagram.com/avd.dima03/"><img alt="Twitter" src={twitter}/></a>
                    <a href="https://www.instagram.com/avd.dima03/"><img alt="Facebook" src={facebook}/></a>
                    <a href="https://www.instagram.com/avd.dima03/"><img alt="Instagram" src={insta}/></a>
                    <hr/>
                </div>
                {/* ---------------------Header----------------------- */}
                <header>
                    <div>
                        <a href="/">
                            <img class="logo" alt="logo" src={logo}></img>
                        </a>
                        <a href="mailto:avdieienko.d@gmail.com">
                            <img class="contact_me" alt="Contact me" src={contactMe}></img>
                        </a>
                    </div>
                </header>
                {/* ---------------------Main----------------------- */}
                <main>
                    <section className="welcome_section">
                        <div className="portrait_wrapper">
                            <img className="portrait" alt="Portrait" src={portrait_main}></img>
                            <img className="ball" alt="Ball" src={ball}></img>
                            <img className="car" alt="Car" src={f1_car}></img>
                        </div>
                        <div className="greeting_wrapper">
                            <h1 className="greeting">Hi, my name is</h1>
                            <h1 className="name">Dmytro Avdieienko</h1>
                            <h3 className="degree">Bsc Computer Science, Soton '23</h3>
                        </div>
                    </section>
                    <section className="scroll_wrapper">
                        <h3>SCROLL</h3>
                        <hr/>
                    </section>
                    <section className="aboutme_section">
                        <h1>About me</h1>
                        <p className="about_me">
                            Born in Kyiv, Ukraine.<img alt="Ukrainian flag" src={flag}/> I am 17 years old and studying at the University of Southampton.<br/><br/>
                            My interests include software engineering, artificial intelligence, and machine learning.
                            Python developer, Software developer, Web developer Intern.<br/><br/>
                            Undergoing UFP at Soton with progression degree as Bsc Computer Science. Plans include Meng in Artificial Intelligence.🖥️
                        </p>
                        <img alt="Greeting portrait"className="greeting_portrait" src={greeting_portrait}></img>
                    </section>
                    <section className="skills_section">
                        <h1>Skills</h1>
                        <div className="skills">
                            <img className="skill" alt="" src={cplus}/>
                            <img className="skill" alt="" src={java}/>
                            <img className="skill" alt="" src={python}/>
                            <img className="skill" alt="" src={javascript}/>
                            <img className="skill" alt="" src={react_png}/>
                            <img className="skill" alt="" src={html}/>
                            <img className="skill" alt="" src={css}/>
                            <img className="skill" alt="" src={git}/>
                        </div>
                    </section>
                    <section className="certificates_section">
                        <h1>Certificates</h1>
                        <div className="certificates">
                            <div className="certificate">
                                <img alt ="" className="certificate_image" src={Python3}/>
                                <h2 className="certificate_name">Certificate name</h2>
                                <h3 className="certificate_uni">University</h3>
                            </div>
                            <div className="certificate">
                                <img alt ="" className="certificate_image" src={Python3}/>
                                <h2 className="certificate_name">Certificate name</h2>
                                <h3 className="certificate_uni">University</h3>
                            </div>
                            <div className="certificate">
                                <img alt ="" className="certificate_image" src={Python3}/>
                                <h2 className="certificate_name">Certificate name</h2>
                                <h3 className="certificate_uni">University</h3>
                            </div>
                            <div className="certificate">
                                <img alt ="" className="certificate_image" src={Python3}/>
                                <h2 className="certificate_name">Certificate name</h2>
                                <h3 className="certificate_uni">University</h3>
                            </div>
                            <div className="certificate">
                                <img alt ="" className="certificate_image" src={Python3}/>
                                <h2 className="certificate_name">Certificate name</h2>
                                <h3 className="certificate_uni">University</h3>
                            </div>
                            <div className="certificate">
                                <img alt ="" className="certificate_image" src={Python3}/>
                                <h2 className="certificate_name">Certificate name</h2>
                                <h3 className="certificate_uni">University</h3>
                            </div>
                        </div>
                        <a href="https://google.com" className="certificates_button">See more</a>
                    </section>
                    <section className="timeline_section">
                        <h1>Timeline</h1>
                        <div className="timeline">
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
                        </div>
                    </section>
                </main>
                <footer>
                    <div className="socials">
                        <img alt="Instagram" src={insta}/>
                        <img alt="Facebook"src={facebook}/>
                        <img alt="Twitter" src={twitter}/>
                        <img alt="Linkedin" src={linkedin}/>
                        <img alt="Github"src={github}/>
                    </div>
                    <h4 >Designed & Built by <a className="signature" href="/">Dmytro Avdieienko</a></h4>
                </footer>
        </>
    )
}