import { VisibilityDiv } from "./OnScreen"
import { useState } from "react"
import "../styles/Projects.css"
import restaurant from "../images/restaurant.png"
import flight from "../images/flight.png"
import statistic from "../images/statistic.png"
import security from "../images/security.png"
import sort from "../images/sort.png"



export const Projects = ()=>{
    const [primary, setPrimary] = useState(2)



    const projectsList = [{
        "title":"Project 1",
        "image":restaurant
    },
    {
        "title":"Project 2",
        "image":flight
    },
    {
        "title":"Project 3",
        "image":statistic
    },
    {
        "title":"Project 4",
        "image":security
    },
    {
        "title":"Project 5",
        "image":sort
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
                <h1>Projects</h1>
            </VisibilityDiv>
            <div className="projects_wrapper">
                <div className="clicker_left" onClick={()=>{handleClick(-1)}}>
                    <h1>{"<"}</h1>
                </div>
                {projectsList.map((project,i)=>{
                    if(i === primary-1 || i ===primary+1){
                        return(
                            <>
                                <div key={i} className={`project helper ${i === primary+1 ? "right":"left"}`}>
                                    <img alt="project" className="project_image helper" src={project["image"]}/>
                                </div>
                            </>
                        )
                    }
                    else if(i===primary){
                        return(
                            <>
                                <div key={i} id={i} className="project">
                                    <img alt="project" className="project_image" src={project["image"]}/>
                                </div>
                            </>
                        )
                    }
                    else{
                        return(
                            <>
                                <div id={i} key={i} className={`project  invisible ${i>primary ? "right":"left"}`}>
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
            <div className="project_description">
                <h1>{projectsList[primary]["title"]}</h1>
            </div>
        </section>
    )
}