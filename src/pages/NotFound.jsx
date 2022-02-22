import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div>
            <p>
                404 NotFound Page
            </p>
            <Link to='/'>go home</Link>
        </div>
        
    );
}

export default NotFound;