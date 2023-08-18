import { Link } from "react-router-dom"


export const NotFound = () =>{
    return(
        <div className="error_wrapper">
            <h1 className="error_title">Page not Found</h1>
            <h2 className="error_id">Error 404</h2>
            <Link to="/" className="link_button">Go back</Link>
            <h3 className="error_logo header_logo">VDNK</h3>
        </div>

    )
}