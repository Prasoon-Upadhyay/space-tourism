 
import './HomePage.css'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'

const HomePage = () => {
 
  
  return (
    <div className='page'>

      <Navbar />  
      <div className="container"   >  

          <div className='text-container'>
              <p className='sub-heading'>So, you want to travel to </p>
              <h1 className='heading'>SPACE</h1>
              <p className='content'>
                Let's face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the
                edge of it. Well sit back, and relax because we'll give you
                a truly out of this world experience!

              </p>
          </div>

          <div className='btn--div'>
             <Link to={'/destinations'}> <button className='btn'> EXPLORE</button> </Link>  
          </div>
      </div>
    </div>
  )
}

export default HomePage