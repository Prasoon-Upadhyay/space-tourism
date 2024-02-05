
import Navbar from '../../components/Navbar/Navbar'
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className="error--page">
            
            <Navbar />

            <div className="error--page--container">
                    <h1 className='error--code'>ERROR <span>404</span></h1>
                    <h1 className='error--code--msg'>NOT FOUND</h1>
                    <p  className='error--message'>
                        The page you requested does not exist. 
                        Please check if you have entered the wrong address 
                        and retry.
                    </p>
            </div>
        </div>
    )
}

export default ErrorPage