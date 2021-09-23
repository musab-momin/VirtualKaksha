import { Link } from "react-router-dom";
import Registrationform  from "../components/Registrationform";


const Register = ()=>
{
    return(<div className='container'>
        <Registrationform />
        <div className='sec-footer'>
            <div>
                <p>have account <Link to='/'>goto login</Link> </p>
            </div>
        </div>
    </div>)
}

export default Register;