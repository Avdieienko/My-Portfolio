import { Footer, DesktopFooter } from "./components/Footer";
import { Header } from "./components/Header";
import { Timeline } from "./components/Timeline";
import { Certificates } from "./components/Certificates";
import { Skills } from "./components/Skills";
import { AboutMe } from "./components/AboutMe";
import { Welcome } from "./components/Welcome";
import { Projects } from "./components/Projects";


export const Main = () =>{
    return(
        <>
                <Header/>
                <main>
                    <Welcome/>
                    <AboutMe/>
                    <Skills/>
                    <Projects/>
                    <Certificates/>
                    <Timeline/>
                </main>
                <Footer/>
                <DesktopFooter/>
        </>
    )
}