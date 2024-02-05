import { useState, useEffect, useRef  } from 'react' 
import Navbar from '../../components/Navbar/Navbar'
import './TechnologyPage.css'
import NavButtons from '../../components/NavButtons/NavButtons'
import Technology from '../../components/Technology/Technology'

import LaunchPortrait from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import LaunchLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg'

import PortPortrait from '../../assets/technology/image-spaceport-portrait.jpg'
import PortLandscape from '../../assets/technology/image-spaceport-landscape.jpg'

import CapsulePortrait from '../../assets/technology/image-space-capsule-portrait.jpg'
import CapsuleLandscape from '../../assets/technology/image-space-capsule-landscape.jpg'

export interface TechInterface {
    name: string
    images: {
        portrait: string
        landscape: string
    }
    description: string
}


interface TechImageMap  {
    [key: string]: {
        portrait: string,
        landscape: string
    }
}

const techMap: TechImageMap  = {
    "Launch vehicle": {
        portrait: LaunchPortrait,
        landscape: LaunchLandscape
    },
    "Spaceport": {
        portrait: PortPortrait,
        landscape: PortLandscape
    },
    "Space capsule": {
        portrait: CapsulePortrait,
        landscape: CapsuleLandscape
    }
}




const technologies: TechInterface[] = [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
        "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": "./assets/technology/image-spaceport-portrait.jpg",
        "landscape": "./assets/technology/image-spaceport-landscape.jpg"
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
        "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]


const TechnologyPage = () => {

    const [activeTech, setActiveTech] = useState<TechInterface>(technologies[0])
    const textRef = useRef<HTMLDivElement | null>(null)
    const imgRef = useRef<HTMLImageElement | null >(null) 

    useEffect( () => {
  
      textRef.current?.classList.add('fade--y--anim') 
      imgRef.current?.classList.add('fade--x--anim') 
          const classTimeout = setTimeout( () => {
            
            textRef.current?.classList.remove('fade--y--anim')
            imgRef.current?.classList.remove('fade--x--anim') 

          },1000)

          return () => clearInterval(classTimeout)

    }, [activeTech])

    return (
        <div className="tech--page">
            
            <Navbar />
            
            <div className="tech--subheading">
                    <h2 className="tech--page--subheading "><span>03</span> SPACE LAUNCH 101</h2>
            </div>
            <div className='tech--page--container'>
                <div className='tech--text'> 

                    <div className='tech--content '>
                        <NavButtons technologies={technologies} current={ { activeTech, setActiveTech } } />
                        <div ref={textRef}>
                            <Technology technology={activeTech} />
                        </div>
                    </div>
               
                </div>

                <div className='--image--portrait fade--x--anim'>
                    <img ref={imgRef} src = {techMap[activeTech.name].portrait} className='current--tech--image' />
                </div>

                <div className='--image--landscape'>
                    <img  src = {techMap[activeTech.name].landscape} className='current--tech--image' /> 
                </div>

            </div>
        </div>
    )
}

export default TechnologyPage