import { useEffect, useState, useRef } from "react"

import './DestinationPage.css'
 
import Navbar from "../../components/Navbar/Navbar" 
import DestinationNav from "../../components/DestinationNav/DestinationNav"
import Destination from "../../components/Destination/Destination"

import Moon from '../../assets/destination/image-moon.png'
import Mars from '../../assets/destination/image-mars.png'
import Europa from '../../assets/destination/image-europa.png'
import Titan from '../../assets/destination/image-titan.png'

export interface DestinationInterface {
  name: string,
  images: {
      png : string,
      webp: string
  }

  description: string
  travel: string
  distance: string
  
}

const destinations: DestinationInterface[] =  [
  {
    "name": "Moon",
    "images": {
      "png": "./assets/destination/image-moon.png",
      "webp": "./assets/destination/image-moon.webp"
    },
    "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    "distance": "384,400 km",
    "travel": "3 days"
  },
  {
    "name": "Mars",
    "images": {
      "png": "./assets/destination/image-mars.png",
      "webp": "./assets/destination/image-mars.webp"
    },
    "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    "distance": "225 mil. km",
    "travel": "9 months"
  },
  {
    "name": "Europa",
    "images": {
      "png": "./assets/destination/image-europa.png",
      "webp": "./assets/destination/image-europa.webp"
    },
    "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    "distance": "628 mil. km",
    "travel": "3 years"
  },
  {
    "name": "Titan",
    "images": {
      "png": "./assets/destination/image-titan.png",
      "webp": "./assets/destination/image-titan.webp"
    },
    "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    "distance": "1.6 bil. km",
    "travel": "7 years"
  }

]

export interface ImageMap {
  [key: string] :string
}

const logoMap : ImageMap= {
  
  'Moon': Moon,
  'Mars': Mars,
  'Europa': Europa,
  'Titan': Titan
}


const DestinationPage = () => {
  
    const [currentPlanet, setCurrentPlanet] = useState<DestinationInterface>(destinations[0])
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
    },[currentPlanet])
  
    return (
        <div className="dest--page">
            <Navbar />


            <div className="dest--page--sub--div"> 
                <h2 className="dest--page--subheading"><span>01</span> PICK YOUR DESTINATION</h2>
            </div>
            <div className="dest--page--container">
 
                  <div className="current--planet-div">
                      <img ref={imgRef} src = {logoMap[currentPlanet.name]} />
                  </div>
                 
              <div className="dest--page--content">

                  <DestinationNav destinations={destinations} planet = {{currentPlanet, setCurrentPlanet}}/>
                  <div ref = {textRef}>
                    <Destination destination ={currentPlanet} />
                  </div>
              </div>

            </div>


            <div>
            </div>
            
            

        </div>
    )
}

export default DestinationPage