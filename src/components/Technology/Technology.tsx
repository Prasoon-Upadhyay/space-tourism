
import { TechInterface } from "../../pages/TechnologyPage/TechnologyPage"
import './Technology.css'

const Technology = ( { technology }: { technology: TechInterface } ) => {
    return (
        <div className="current--tech-container fade--y--anim">

            <div className="current--tech--about">
                <h2 className="current--tech--subheading">THE TERMINOLOGY...</h2>

                <h1 className="current--tech--heading">{technology.name}</h1>

                <p className="current--tech--descp">
                    {technology.description}
                </p>
            </div>

        </div>
    )
}

export default Technology