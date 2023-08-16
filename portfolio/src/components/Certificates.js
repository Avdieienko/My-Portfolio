import Python3 from "../images/Python3.webp";
import meta_certificate from "../images/meta_certificate.webp"
import python_web from "../images/python_web.webp"
import harvard_certificate from "../images/harvard_certificate.webp"
import duke_certificate from "../images/duke_certificate.webp"
import { VisibilityDiv } from "./OnScreen";
import "../styles/Certificates.css"



export const Certificates = ()=>{
    return(
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
            <div>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.coursera.org/user/ab73ee8c75b35fed6edaa053000e7cb4" className="link_button">See more</a>
            </div>
        </section>
    )
}