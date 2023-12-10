import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faLocationDot, faMap, faMapLocation, faMapLocationDot, faMapPin } from "@fortawesome/free-solid-svg-icons";

export default function Card(props){
    return(    
            <div className="card">
                <div className="card-img-div">
                    <img 
                        src={props.imageUrl} 
                        alt={props.title}
                    />
                </div>

                <div className="card-info-div">
                    <div className="card-info-location">
                        <FontAwesomeIcon icon={faMapPin} className="location-icon"/>
                        <h2 className="state-name">{props.location}</h2>
                        <a href={props.googleMapsUrl}>View on google maps</a>
                    </div>
                   
                    <h1 className="card-place-name">{props.title}</h1>
                    <p className="card-date-visited">{props.startDate} - {props.endDate}  </p>
                    <p className="card-description">{props.description}</p>
                </div>
            
            </div>
      
    );
}