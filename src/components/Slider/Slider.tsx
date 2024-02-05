import './Slider.css'
import { CrewInterface } from '../../pages/CrewPage/CrewPage'

const Slider = ({crewMembers, current }: {crewMembers: CrewInterface[], current: {activeCrew: CrewInterface, setActiveCrew: React.Dispatch<React.SetStateAction<CrewInterface>>}} ) => {
    
    const renderedLinks = crewMembers.map( (member, i) => {
        if(member.name === current.activeCrew.name)
        {
            return <div className="slider--link slide--active"> </div>
        }
        return <div onClick={() => current.setActiveCrew(crewMembers[i])} className="slider--link"> </div>
    })

    return (
        <ul className='--slider'>
             {renderedLinks}
        </ul>
    )
}

export default Slider