import portrait_main from "../images/portrait.webp";
import f1_car from "../images/f1_car.png";
import ball from "../images/ball.png";
import "../styles/Welcome.css"


export const Welcome = () =>{
    return(
        <>
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
        </>
    )
}