import { DestinationInterface } from "../../pages/DestinationsPage/DestinationPage"
import './Destination.css'

const Destination = ({destination}: {destination: DestinationInterface}) => {
    


    return (
        <div className = 'current--dest'>
            <div className= "current--dest-descp">
                <h1 className="current--dest-heading">{destination.name}</h1> 
                <span className="current--dest-content">
                    <p>{destination.description}</p> 
                </span>
            </div>

            <div className="current--dest-details">
                    <div>
                        <p className="--title">AVG. DISTANCE</p>
                        <p className="--value">{destination.distance}</p>
                    </div>
                    <div  >
                        <p className="--title">EST. TRAVEL TIME</p>
                        <p className="--value">{destination.travel}</p>
                    </div>
            </div>

        </div>
    )
}

export default Destination