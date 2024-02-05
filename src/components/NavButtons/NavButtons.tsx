
import { TechInterface } from '../../pages/TechnologyPage/TechnologyPage'
import './NavButtons.css'

const NavButtons = ({technologies, current}: {technologies: TechInterface[], current: {activeTech: TechInterface, setActiveTech: React.Dispatch<React.SetStateAction<TechInterface>>}}) => 
{
    const renderedBtns = technologies.map( (tech, i) => {
        if(tech.name === current.activeTech.name)
        {
            return <div className="nav--btn nav--btn--active"> <span> {i + 1} </span> </div>
        }
        return <div onClick={() => current.setActiveTech(technologies[i])} className="nav--btn"> <span> {i + 1} </span> </div>
    })

    return (
        <ul className='nav--btns'>
             {renderedBtns}
        </ul>
    )

 
}

export default NavButtons