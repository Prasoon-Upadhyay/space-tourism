import { DestinationInterface } from "../../pages/DestinationsPage/DestinationPage"
import './DestinationNav.css'


const DestinationNav = ({destinations, planet} : { destinations: DestinationInterface[], planet: {currentPlanet: DestinationInterface, setCurrentPlanet: React.Dispatch<React.SetStateAction<DestinationInterface>>}}) => {


    const navDest = destinations.map( (destination) => {

        if(planet.currentPlanet === destination)
        {
            return <li className="nav--dest-link active">{destination.name}</li>
        }

        return <li onClick={() => planet.setCurrentPlanet(destination)} className="nav--dest-link ">{destination.name}</li>

    })

    return(
        <ul className="nav--dest">
            {navDest}
        </ul>

    )

}

export default DestinationNav