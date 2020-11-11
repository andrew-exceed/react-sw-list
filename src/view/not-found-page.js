import React from "react";
import { Link, useHistory } from 'react-router-dom';


const NotFounPage = () => {
    let history = useHistory();
    React.useEffect(() => {
        history.push("/404");
    },[history]);
    return (
        <div>
            <h1>404 - Not Found!</h1>
            <Link to="/">
                Go Home
            </Link>
        </div>
    );
}

export default NotFounPage;