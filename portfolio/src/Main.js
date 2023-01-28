import logo from "./images/logo.png"
import contactMe from "./images/contact_me.png"


export const Main = () =>{
    return(
        <>
            <body>
                <header>
                    <img class="logo" alt="logo" src={logo}></img>
                    <img class="contact_me" alt="Contact me" src={contactMe}></img>
                </header>
                <main>
                    <h1>Main</h1>
                </main>
                <footer>
                    <h1>Footer</h1>
                </footer>
            </body>
        </>
    )
}