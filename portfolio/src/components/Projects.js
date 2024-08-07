import { VisibilityDiv } from "./OnScreen"
import {useState } from "react"
import "../styles/Projects.css"
import restaurant from "../images/restaurant.png"
import flight from "../images/flight.png"
import statistic from "../images/statistic.png"
import security from "../images/security.png"
import sort from "../images/sort.png"
import harmonia from "../images/harmonia.png"
import cryptostash from "../images/cryptostash.png"
import {MdArrowBackIos, MdArrowForwardIos} from "react-icons/md"
import {BiLogoReact, BiLogoHtml5,BiLogoCss3, BiLogoPython,BiLogoJavascript,BiLogoFlask} from "react-icons/bi"
import {IoLogoElectron} from "react-icons/io5"
import {SiMysql} from "react-icons/si"
import {BsGithub} from "react-icons/bs"
import {useOrientation} from "react-use"
import "../styles/ProjectsMob.css"



export const Projects = ()=>{
    const [primary, setPrimary] = useState(2)

    const {type} = useOrientation()

    const projectsList = [{
        "title":"Security camera",
        "image":security,
        "skills":[BiLogoPython],
        "link":"https://github.com/Avdieienko/Security-camera",
        "description":"Detecting the movement and face on the camera, highlighting it, and capturing"
    },
    {
        "title":"Flight Route Analysis",
        "image":flight,
        "skills":[BiLogoPython],
        "link":"https://github.com/Avdieienko/FlightAnalysis",
        "description":"Dataframe for each flight, link for scraped website, and a graph with cheapest, average, and maximum ticket price for each day in the given date range."
    },
    {
        "title":"CryptoStash",
        "image":cryptostash,
        "skills":[BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3],
        "link":"https://avdieienko.com/cryptostash/",
        "description":"Website that provides information and data about cryptocurrencies using Binance API. Gives all current data and kline graph for more than 25 currencies."
    },
    {
        "title":"Sorting Visualiser",
        "image":sort,
        "skills":[BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3],
        "link":"https://avdieienko.com/sorter",
        "description":"React web app with visualisation of array sorting using different algorithms"
    },
    {
        "title":"Japanese restaurant",
        "image":restaurant,
        "skills":[BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3],
        "link":"https://avdieienko.com/restaurant/",
        "description":"Website for an imaginary japanese restaurant, with all functionality (except back-end)"
    },
    {
        "title":"Statistical learning model",
        "image":statistic,
        "skills":[BiLogoPython],
        "link":"https://github.com/Avdieienko/statistical_learning_models_comparison",
        "description":"The comparison graph of two regression and classification models accuracy score for revenue prediction and profitability classification of films"
    }]


    const handleClick = (e) => {
        if(primary+e ===-1 || primary+e === projectsList.length) return;
        const leftInvisibleStyle = document.getElementById(`${primary-2}`);
        const rightInvisibleStyle = document.getElementById(`${primary+2}`);
        const mainStyle = document.getElementById(`${primary}`);
        const leftHelperStyle = document.getElementsByClassName("project helper left")[0]
        const rightHelperStyle = document.getElementsByClassName("project helper right")[0]
        if(e === -1){
            if(leftInvisibleStyle){
                setTimeout(()=>{
                    leftInvisibleStyle.classList.add("lvr")
                },)
                setTimeout(()=>{
                    leftInvisibleStyle.classList.remove("lvr")
                },1500)
            }
            if(leftHelperStyle){
                setTimeout(()=>{
                    leftHelperStyle.classList.add("lhr")
                },)
                setTimeout(()=>{
                    leftHelperStyle.classList.remove("lhr")
                },1500)
            }
            if(mainStyle){
                setTimeout(()=>{
                    mainStyle.classList.add("mr")
                },)
                setTimeout(()=>{
                    mainStyle.classList.remove("mr")
                },1500)
            }
            if(rightHelperStyle){
                setTimeout(()=>{
                    rightHelperStyle.classList.add("rhr")
                },)
                setTimeout(()=>{
                    rightHelperStyle.classList.remove("rhr")
                },1500)
            }
        }
        else{
            if(rightInvisibleStyle){
                setTimeout(()=>{
                    rightInvisibleStyle.classList.add("rvl")
                },)
                setTimeout(()=>{
                    rightInvisibleStyle.classList.remove("rvl")
                },1500)
            }
            if(rightHelperStyle){
                setTimeout(()=>{
                    rightHelperStyle.classList.add("rhl")
                },)
                setTimeout(()=>{
                    rightHelperStyle.classList.remove("rhl")
                },1500)
            }
            if(mainStyle){
                setTimeout(()=>{
                    mainStyle.classList.add("ml")
                },)
                setTimeout(()=>{
                    mainStyle.classList.remove("ml")
                },1500)
            }
            if(leftHelperStyle){
                setTimeout(()=>{
                    leftHelperStyle.classList.add("lhl")
                },)
                setTimeout(()=>{
                    leftHelperStyle.classList.remove("lhl")
                },1500)
            }
        }
        // Set primary
        setTimeout(()=>{
                setPrimary(primary+e)
            },1480
        )
    }

    return(
        <section className="projects_section">
            <VisibilityDiv classname="bottom animation">
                <h1 className="projects_section_title">Projects</h1>
            </VisibilityDiv>
            {type !== "landscape-primary"
            ?<a href="https://github.com/daniil-zahoruiko/spotify_project" className="project_container_mobile">
                <div className="project_mobile">
                    <img className="project_image_mobile" alt="Harmonia" src={harmonia} />
                    <h1 className="project_title_mobile">Harmonia (Spotify clone)</h1>
                    <p className="project_description_mobile">Full Stack music streaming application.
                     Includes user account management, authentication and ability to become creator and upload your own songs.
                    </p>
                </div>
            </a>
            :
                <div className="main_project_wrapper">
                    <a href="https://github.com/daniil-zahoruiko/spotify_project">
                        <img className="project_image main_project" alt="Harmonia" src={harmonia} />
                    </a>
                    <div className="project_info">
                        <h1 className="project_title main_project_title">Harmonia (Spotify clone)</h1>
                        <div className="project_skills">
                            <BiLogoFlask className="project_skill" color="#BAFF39"/>
                            <BiLogoPython className="project_skill" color="#BAFF39"/>
                            <BiLogoReact className="project_skill" color="#BAFF39"/>
                            <BiLogoJavascript className="project_skill" color="#BAFF39"/>
                            <IoLogoElectron className="project_skill" color="#BAFF39"/>
                            <SiMysql className="project_skill" color="#BAFF39"/>
                        </div>
                    </div>
                    <div className="project_description_wrapper">
                        <p className="project_description main_project_description">Full Stack music streaming application similar to Spotify.
                        Includes user account management, authentication, and bilingual support (Ukrainian and English). Enables users to become creators and upload their own songs.
                        </p>
                    </div>
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/daniil-zahoruiko/spotify_project" className="link_button">Explore</a>
                    <h1>Other projects</h1>
                </div>
            }
            {type !== "landscape-primary" ?
            <div className="projects_wrapper_mobile">
                {projectsList.map((project, i)=>{
                    return(
                        <a key={i} href={project.link} className="project_container_mobile">
                            <div className="project_mobile">
                                    <img alt={project.title} className="project_image_mobile" src={project.image}/>
                                    <h1 className="project_title_mobile">{project.title}</h1>
                                    <p className="project_description_mobile">{project.description}</p>
                            </div>
                        </a>
                    )
                })}
            </div>
            :<>
                <div className="projects_wrapper">
                    <div className="clicker_left" onClick={()=>{handleClick(-1)}}>
                        <MdArrowBackIos className="clicker" color="#BAFF39"/>
                    </div>
                    {projectsList.map((project,i)=>{
                        if(i === primary-1 || i ===primary+1){
                            return(
                                <>
                                    <div key={project["title"]} className={`project helper ${i === primary+1 ? "right":"left"}`}>
                                        <img alt="project" className="project_image helper" src={project["image"]}/>
                                    </div>
                                </>
                            )
                        }
                        else if(i===primary){
                            return(
                                <>
                                    <div key={project["title"]} id={i} className="project">
                                        <img alt="project" className="project_image" src={project["image"]}/>
                                    </div>
                                </>
                            )
                        }
                        else{
                            return(
                                <>
                                    <div id={i} key={project["title"]} className={`project  invisible ${i>primary ? "right":"left"}`}>
                                        <img alt="project" className="project_image invisible" src={project["image"]}/>
                                    </div>
                                </>
                            )
                        }
                    })}
                    <div className="clicker_right" onClick={()=>{handleClick(1)}}>
                        <MdArrowForwardIos className="clicker" color="#BAFF39"/>
                    </div>
                </div>
                <div className="project_info">
                    <div>
                        <h1 className="project_title">{projectsList[primary]["title"]}</h1>
                    </div>
                    <div className="project_skills">
                        {projectsList[primary]["skills"].map((Skill,i)=>{
                            return(
                                <Skill key={i} className="project_skill" color="#BAFF39"/>
                            )
                        })}
                    </div>
                </div>
                <div className="project_description_wrapper">
                    <p className="project_description">{projectsList[primary]["description"]}</p>
                </div>
                <a rel="noopener noreferrer" target="_blank" href={projectsList[primary]["link"]} className="link_button">Explore</a>
            </>}
            <h1 className="projects_git">See more on my Github</h1>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/Avdieienko" className="link_button">My Github <BsGithub/></a>

        </section>
    )
}