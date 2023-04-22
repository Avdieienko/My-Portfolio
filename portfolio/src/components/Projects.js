import { VisibilityDiv } from "./OnScreen"
import { useState } from "react"
import "../styles/Projects.css"
import restaurant from "../images/restaurant.png"
import flight from "../images/flight.png"
import statistic from "../images/statistic.png"
import security from "../images/security.png"
import sort from "../images/sort.png"
import python from "../images/python.webp";
import react_png from "../images/react.webp";
import html from "../images/html.webp";
import css from "../images/css.webp";




export const Projects = ()=>{
    const [primary, setPrimary] = useState(2)



    const projectsList = [{
        "title":"Security camera",
        "image":security,
        "skills":[python],
        "link":"https://github.com/Avdieienko/Security-camera",
        "description":"Detecting the movement and face on the camera, highlighting it, and capturing"
    },
    {
        "title":"Flight Route Analysis",
        "image":flight,
        "skills":[python],
        "link":"https://github.com/Avdieienko/FlightAnalysis",
        "description":"Dataframe for each flight, link for scraped website, and a graph with cheapest average and maximum ticket price for each day in the given date range."
    },
    {
        "title":"Japanese restaurant",
        "image":restaurant,
        "skills":[react_png, html,css],
        "link":"https://avdieienko.com/restaurant/",
        "description":"Website for an imaginary japanese restaurant, with all functionality (except back-end)"
    },
    {
        "title":"Sorting Visualiser",
        "image":sort,
        "skills":[react_png, html,css],
        "link":"https://github.com/Avdieienko/react_sort",
        "description":"React web app with visualisation of array sorting using different algorithms"
    },
    {
        "title":"Statistical learning model comparison",
        "image":statistic,
        "skills":[python],
        "link":"https://github.com/Avdieienko/statistical_learning_models_comparison",
        "description":"The comparison graph of two regression and classification models accuracy score for revenue prediction and profitability classification based on a database of 5000 movies catalogued by The Movie Database (TMDb)"
    }]


    const handleClick = (e) => {
        if(primary+e ===-1 || primary+e === projectsList.length) return;
        const leftInvisibleStyle = document.getElementById(`${primary-2}`);
        const rightInvisibleStyle = document.getElementById(`${primary+2}`);
        const mainStyle = document.getElementById(`${primary}`);
        const leftHelperStyle = document.getElementsByClassName("project helper left")[0]
        const rightHelperStyle = document.getElementsByClassName("project helper right")[0]
        if(e === -1){
            if(leftInvisibleStyle!==undefined){
                setTimeout(()=>{
                    leftInvisibleStyle.classList.add("lvr")
                },)
                setTimeout(()=>{
                    leftInvisibleStyle.classList.remove("lvr")
                },1500)
            }
            if(leftHelperStyle!==undefined){
                setTimeout(()=>{
                    leftHelperStyle.classList.add("lhr")
                },)
                setTimeout(()=>{
                    leftHelperStyle.classList.remove("lhr")
                },1500)
            }
            if(mainStyle!==undefined){
                setTimeout(()=>{
                    mainStyle.classList.add("mr")
                },)
                setTimeout(()=>{
                    mainStyle.classList.remove("mr")
                },1500)
            }
            if(rightHelperStyle!==undefined){
                setTimeout(()=>{
                    rightHelperStyle.classList.add("rhr")
                },)
                setTimeout(()=>{
                    rightHelperStyle.classList.remove("rhr")
                },1500)
            }
        }
        else{
            if(rightInvisibleStyle!==undefined){
                setTimeout(()=>{
                    rightInvisibleStyle.classList.add("rvl")
                },)
                setTimeout(()=>{
                    rightInvisibleStyle.classList.remove("rvl")
                },1500)
            }
            if(rightHelperStyle!==undefined){
                setTimeout(()=>{
                    rightHelperStyle.classList.add("rhl")
                },)
                setTimeout(()=>{
                    rightHelperStyle.classList.remove("rhl")
                },1500)
            }
            if(mainStyle!==undefined){
                setTimeout(()=>{
                    mainStyle.classList.add("ml")
                },)
                setTimeout(()=>{
                    mainStyle.classList.remove("ml")
                },1500)
            }
            if(leftHelperStyle!==undefined){
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
            <div className="projects_wrapper">
                <div className="clicker_left" onClick={()=>{handleClick(-1)}}>
                    <h1>{"<"}</h1>
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
                    <h1>{">"}</h1>
                </div>
            </div>
            <div className="project_info">
                <div>
                    <h1 className="project_title">{projectsList[primary]["title"]}</h1>
                </div>
                <div className="project_skills">
                    {projectsList[primary]["skills"].map((skill,i)=>{
                        return(
                            <img alt={projectsList[primary]["title"]} className="project_skill" src={skill} key={i}></img>
                        )
                    })}
                </div>
            </div>
            <div className="project_description_wrapper">
                <p className="project_description">{projectsList[primary]["description"]}</p>
            </div>
            <VisibilityDiv classname="bottom_animation">
                    <a rel="noopener noreferrer" target="_blank" href={projectsList[primary]["link"]} className="certificates_button">Explore</a>
            </VisibilityDiv>
        </section>
    )
}