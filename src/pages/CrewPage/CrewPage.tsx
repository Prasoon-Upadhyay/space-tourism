import { useEffect, useRef, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import './CrewPage.css'
import Slider from "../../components/Slider/Slider"

import Ansari from '../../assets/crew/image-anousheh-ansari.png'
import Hurley from '../../assets/crew/image-douglas-hurley.png'
import Shuttleworth from '../../assets/crew/image-mark-shuttleworth.png'
import Glover from '../../assets/crew/image-victor-glover.png'

import { ImageMap } from "../DestinationsPage/DestinationPage"

export interface CrewInterface {
    name: string,
    images: {
        png: string,
        webp: string
    },
    role: string,
    bio: string

}
 
const imageMap : ImageMap = {
    "Douglas Hurley" : Hurley,
    "Mark Shuttleworth": Shuttleworth,
    "Victor Glover": Glover,
    "Anousheh Ansari": Ansari
}



const crew : CrewInterface[] = [
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "./assets/crew/image-douglas-hurley.png",
        "webp": "./assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "./assets/crew/image-mark-shuttleworth.png",
        "webp": "./assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": "./assets/crew/image-victor-glover.png",
        "webp": "./assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "./assets/crew/image-anousheh-ansari.png",
        "webp": "./assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ]



const CrewPage = () => {
    
    const [activeCrew, setActiveCrew] = useState<CrewInterface>(crew[0])
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

    }, [activeCrew])


    return (
        <div className="crew--page" >
            <Navbar />
            <div className="crew--subheading">
                    <h2 className="crew--page--subheading "><span>02</span> MEET YOUR CREW</h2>
            </div>

            <div className="crew--page-container  ">
                <div   className="crew--page--content ">

                    <div ref = {textRef} className="crew--member-about" >
                        <h2 className="crew--role">{activeCrew.role}</h2>
                        <h1 className="crew--name">{activeCrew.name}</h1>

                        <p className="crew--bio">{activeCrew.bio}</p>
                    </div>

                    <div className="--slider--div">
                      <Slider crewMembers={crew} current = {{activeCrew, setActiveCrew}} />
                    </div>
                </div>

                <div className="crew--img--div"  >
                    <img ref = {imgRef} className="crew--img"  src = {imageMap[activeCrew.name]} />
                </div>

            </div>
        </div>
    )
}

export default CrewPage