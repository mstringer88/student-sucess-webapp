import * as React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn} from '../../utils/api';

export default class Navbar extends React.Component {
 
    
    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                { isLoggedIn()? <Link to="/dashboard" className="navbar-brand" href="#"> Welcome, "User Name Here"!</Link>:<Link to="/" className="navbar-brand" href="#">Covalence Student Success App</Link> }
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            { isLoggedIn()? <Link to="/logout" className="btn btn-success" href="#">Logout</Link>:<Link to="/login" id="Login" className="btn btn-success" href="#">Login</Link> }
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

