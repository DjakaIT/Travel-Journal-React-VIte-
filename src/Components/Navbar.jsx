import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEarth } from "@fortawesome/free-solid-svg-icons";

export default function Navbar (){
    return(
        <nav className="travelNav">
            <FontAwesomeIcon icon={faEarth} className="nav-icon animate__animated animate__headShake" />
            <h1 className="nav-title">My travel journal</h1>
        </nav>

    );

}