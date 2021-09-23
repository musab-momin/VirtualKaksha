
import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'



function Login()
{
    return(
        <div className='container'>
            <LoginForm />
            <div className='sec-footer'>
            <div style={{width: 'max-content'}}>
                <p>Don't have account <Link to='/register'>goto registration</Link> </p>
            </div>
        </div>
        </div>
    )
    
}

export default Login