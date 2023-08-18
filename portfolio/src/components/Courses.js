import {Header} from "./Header"
import {TiTick} from "react-icons/ti"
import "../styles/Courses.css"
import { DesktopFooter, Footer } from "./Footer"


export const Courses = () => {
    return(
        <>
            <Header/>
            <main>
                <section className="page_title_wrapper">
                    <h1 className="page_title_text">
                        Courses
                    </h1>
                    <hr/>
                </section>
                <section className="specializations_wrapper">
                    <div className="page_header_wrapper">
                        <h1 className="page_header">Specializations</h1>
                        <hr/>
                    </div>
                    <div className="specialization">
                        <div className="specialization_title">
                            <TiTick color="green" size={45}/>
                            <h2 className="title_text">Meta Front-End Developer Professional Certificate</h2>
                        </div>
                        <div className="specialization_courses_wrapper">
                            <div className="specialization_course">
                                <TiTick color="green" size={25}/>
                                <p>Introduction to Front-End Development</p>
                            </div>
                            <div className="specialization_course">
                                <TiTick color="green" size={25}/>
                                <p>Programming with JavaScript</p>
                            </div>
                            <div className="specialization_course">
                                <TiTick color="green" size={25}/>
                                <p>Version Control</p>
                            </div>
                            <div className="specialization_course">
                                <TiTick color="green" size={25}/>
                                <p>HTML and CSS in depth</p>
                            </div>
                            <div className="specialization_course">
                                <TiTick color="green" size={25}/>
                                <p>React Basics</p>
                            </div>
                            <div className="specialization_course">
                                <TiTick color="green" size={25}/>
                                <p>Advanced React</p>
                            </div>
                            <div className="specialization_course">
                                <TiTick color="green" size={25}/>
                                <p>Principles of UX/UI Design</p>
                            </div>
                            <div className="specialization_course">
                                <TiTick color="green" size={25}/>
                                <p>Front-End Developer Capstone</p>
                            </div>
                            <div className="specialization_course">
                                <TiTick color="green" size={25}/>
                                <p>Coding Interview Preparation</p>
                            </div>
                        </div>
                    </div>
                    <div className="specialization">
                        <div className="specialization_title">
                            <TiTick color="green" size={45}/>
                            <h2 className="title_text">Python 3 Programming | University of Michigan</h2>
                        </div>
                        <div className="specialization_courses_wrapper">
                            <div className="specialization_course">
                                <TiTick color="green" size={25}/>
                                <p>Python Basics</p>
                            </div>
                            <div className="specialization_course">
                                <TiTick color="green" size={25}/>
                                <p>Python Functions, Files, and Dictionaries</p>
                            </div>
                            <div className="specialization_course">
                                <TiTick color="green" size={25}/>
                                <p>Data collection and Processing with Python</p>
                            </div>
                            <div className="specialization_course">
                                <TiTick color="green" size={25}/>
                                <p>Python Classes and Inheritance</p>
                            </div>
                            <div className="specialization_course">
                                <TiTick color="green" size={25}/>
                                <p>Python Project:pillow, tesseract, and opencv</p>
                            </div>
                        </div>
                    </div>
                    <div className="specialization">
                        <div className="specialization_title">
                            <TiTick color="green" size={45}/>
                            <h2 className="title_text">Meta Back-End Developer Professional Certificate</h2>
                        </div>
                        <div className="specialization_courses_wrapper">
                            <div className="specialization_course">
                                <TiTick color="green" size={25}/>
                                <p>Introduction to Back-End Development</p>
                            </div>
                            <div className="specialization_course">
                                <TiTick color="green" size={25}/>
                                <p>Programming in Python</p>
                            </div>
                            <div className="specialization_course">
                                <TiTick color="green" size={25}/>
                                <p>Version Control</p>
                            </div>
                            <div className="specialization_course">
                                <TiTick color="green" size={25}/>
                                <p>Introduction to Databases for Back-End Development</p>
                            </div>
                            <div className="specialization_course">
                                <TiTick color="green" size={25}/>
                                <p>Django Web Framework</p>
                            </div>
                            <div className="specialization_course">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <circle className="circle n1" cx="11" cy="19" r="3" fill="#5599dd"/>
                                    <circle className="circle n2" cx="5" cy="17" r="3" fill="#5599dd"/>
                                    <circle className="circle n3" cx="3" cy="11" r="3" fill="#5599dd"/>
                                    <circle className="circle n4" cx="5" cy="5" r="3" fill="#5599dd"/>
                                    <circle className="circle n5" cx="11" cy="3" r="3" fill="#5599dd"/>
                                    <circle className="circle n6" cx="17" cy="5" r="3" fill="#5599dd"/>
                                    <circle className="circle n7" cx="19" cy="11" r="3" fill="#5599dd"/>
                                    <circle className="circle n8" cx="17" cy="17" r="3" fill="#5599dd"/>
                                </svg>
                                <p>APIs</p>
                            </div>
                            <div className="specialization_course">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <circle className="circle n1" cx="11" cy="19" r="3" fill="#5599dd"/>
                                    <circle className="circle n2" cx="5" cy="17" r="3" fill="#5599dd"/>
                                    <circle className="circle n3" cx="3" cy="11" r="3" fill="#5599dd"/>
                                    <circle className="circle n4" cx="5" cy="5" r="3" fill="#5599dd"/>
                                    <circle className="circle n5" cx="11" cy="3" r="3" fill="#5599dd"/>
                                    <circle className="circle n6" cx="17" cy="5" r="3" fill="#5599dd"/>
                                    <circle className="circle n7" cx="19" cy="11" r="3" fill="#5599dd"/>
                                    <circle className="circle n8" cx="17" cy="17" r="3" fill="#5599dd"/>
                                </svg>
                                <p>The Full Stack</p>
                            </div>
                            <div className="specialization_course">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <circle className="circle n1" cx="11" cy="19" r="3" fill="#5599dd"/>
                                    <circle className="circle n2" cx="5" cy="17" r="3" fill="#5599dd"/>
                                    <circle className="circle n3" cx="3" cy="11" r="3" fill="#5599dd"/>
                                    <circle className="circle n4" cx="5" cy="5" r="3" fill="#5599dd"/>
                                    <circle className="circle n5" cx="11" cy="3" r="3" fill="#5599dd"/>
                                    <circle className="circle n6" cx="17" cy="5" r="3" fill="#5599dd"/>
                                    <circle className="circle n7" cx="19" cy="11" r="3" fill="#5599dd"/>
                                    <circle className="circle n8" cx="17" cy="17" r="3" fill="#5599dd"/>
                                </svg>
                                <p>Back-End Developer Capstone</p>
                            </div>
                            <div className="specialization_course">
                                <TiTick color="green" size={25}/>
                                <p>Coding Interview Preparation</p>
                            </div>
                        </div>
                    </div>
                    <div className="specialization">
                        <div className="specialization_title big_circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 22 22" fill="none">
                                    <circle className="circle n1" cx="11" cy="19" r="3" fill="#5599dd"/>
                                    <circle className="circle n2" cx="5" cy="17" r="3" fill="#5599dd"/>
                                    <circle className="circle n3" cx="3" cy="11" r="3" fill="#5599dd"/>
                                    <circle className="circle n4" cx="5" cy="5" r="3" fill="#5599dd"/>
                                    <circle className="circle n5" cx="11" cy="3" r="3" fill="#5599dd"/>
                                    <circle className="circle n6" cx="17" cy="5" r="3" fill="#5599dd"/>
                                    <circle className="circle n7" cx="19" cy="11" r="3" fill="#5599dd"/>
                                    <circle className="circle n8" cx="17" cy="17" r="3" fill="#5599dd"/>
                                </svg>
                            <h2 className="title_text">DeepLearning.AI Tensor Flow Developer Professional Certificate</h2>
                        </div>
                        <div className="specialization_courses_wrapper">
                            <div className="specialization_course">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <circle className="circle n1" cx="11" cy="19" r="3" fill="#5599dd"/>
                                    <circle className="circle n2" cx="5" cy="17" r="3" fill="#5599dd"/>
                                    <circle className="circle n3" cx="3" cy="11" r="3" fill="#5599dd"/>
                                    <circle className="circle n4" cx="5" cy="5" r="3" fill="#5599dd"/>
                                    <circle className="circle n5" cx="11" cy="3" r="3" fill="#5599dd"/>
                                    <circle className="circle n6" cx="17" cy="5" r="3" fill="#5599dd"/>
                                    <circle className="circle n7" cx="19" cy="11" r="3" fill="#5599dd"/>
                                    <circle className="circle n8" cx="17" cy="17" r="3" fill="#5599dd"/>
                                </svg>
                                <p>Introduction to TensorFlow for AI, ML, and DL</p>
                            </div>
                            <div className="specialization_course">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <circle className="circle n1" cx="11" cy="19" r="3" fill="#5599dd"/>
                                    <circle className="circle n2" cx="5" cy="17" r="3" fill="#5599dd"/>
                                    <circle className="circle n3" cx="3" cy="11" r="3" fill="#5599dd"/>
                                    <circle className="circle n4" cx="5" cy="5" r="3" fill="#5599dd"/>
                                    <circle className="circle n5" cx="11" cy="3" r="3" fill="#5599dd"/>
                                    <circle className="circle n6" cx="17" cy="5" r="3" fill="#5599dd"/>
                                    <circle className="circle n7" cx="19" cy="11" r="3" fill="#5599dd"/>
                                    <circle className="circle n8" cx="17" cy="17" r="3" fill="#5599dd"/>
                                </svg>
                                <p>Convolutional Neural Networks in TensorFlow</p>
                            </div>
                            <div className="specialization_course">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <circle className="circle n1" cx="11" cy="19" r="3" fill="#5599dd"/>
                                    <circle className="circle n2" cx="5" cy="17" r="3" fill="#5599dd"/>
                                    <circle className="circle n3" cx="3" cy="11" r="3" fill="#5599dd"/>
                                    <circle className="circle n4" cx="5" cy="5" r="3" fill="#5599dd"/>
                                    <circle className="circle n5" cx="11" cy="3" r="3" fill="#5599dd"/>
                                    <circle className="circle n6" cx="17" cy="5" r="3" fill="#5599dd"/>
                                    <circle className="circle n7" cx="19" cy="11" r="3" fill="#5599dd"/>
                                    <circle className="circle n8" cx="17" cy="17" r="3" fill="#5599dd"/>
                                </svg>
                                <p>Natural Language Processing in TensorFlow</p>
                            </div>
                            <div className="specialization_course">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <circle className="circle n1" cx="11" cy="19" r="3" fill="#5599dd"/>
                                    <circle className="circle n2" cx="5" cy="17" r="3" fill="#5599dd"/>
                                    <circle className="circle n3" cx="3" cy="11" r="3" fill="#5599dd"/>
                                    <circle className="circle n4" cx="5" cy="5" r="3" fill="#5599dd"/>
                                    <circle className="circle n5" cx="11" cy="3" r="3" fill="#5599dd"/>
                                    <circle className="circle n6" cx="17" cy="5" r="3" fill="#5599dd"/>
                                    <circle className="circle n7" cx="19" cy="11" r="3" fill="#5599dd"/>
                                    <circle className="circle n8" cx="17" cy="17" r="3" fill="#5599dd"/>
                                </svg>
                                <p>Sequences, Time Series and Prediction</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="courses_wrapper">
                    <div className="page_header_wrapper">
                        <h1 className="page_header">Courses</h1>
                        <hr/>
                    </div>
                    <div className="course_wrapper">
                        <div className="specialization_title">
                            <TiTick color="green" size={45}/>
                            <h2 className="title_text">Using Python for Research</h2>
                        </div>
                        <p className="course_uni">Harvard | Edx</p>
                    </div>
                    <div className="course_wrapper">
                        <div className="specialization_title">
                            <TiTick color="green" size={45}/>
                            <h2 className="title_text">Using Python to Access Web Data</h2>
                        </div>
                        <p className="course_uni">University of Michigan | Coursera</p>
                    </div>
                    <div className="course_wrapper">
                        <div className="specialization_title">
                            <TiTick color="green" size={45}/>
                            <h2 className="title_text">Java Programming: Solving Problems with Software</h2>
                        </div>
                        <p className="course_uni">Duke University | Coursera</p>
                    </div>
                </section>
            </main>
            <Footer backgroundColor="black"/>
            <DesktopFooter/>
        </>
    )
}