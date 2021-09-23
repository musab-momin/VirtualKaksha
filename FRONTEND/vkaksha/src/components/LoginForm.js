import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"


const LoginForm = ()=>
{

    const{register, handleSubmit, formState:{errors}, reset} = useForm();
    const[display, setDisplay] = useState(false);


    const onSubmit = (data)=>
    {
        console.log(data)
        reset()
    }
    
    const displayToggle = ()=>{
        setDisplay(!display)
    }


    return(
        <div className='frm-sec'>
            <form style={{height: '400px', width: '50%'}} onSubmit={handleSubmit(onSubmit)}>
                <div className='mb'>
                    <h3>LOGIN</h3>
                </div>
                <div className='mb'>
                    <input type='email' 
                    placeholder='Email*'
                    name='email'
                    {...register('email', {required: 'Email is required', 
                    pattern:
                    {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                        message: 'Invalid Email' 
                    }}
                    )}
                    />
                    {errors.email && (<p className='error-msg'>{errors.email.message}</p>)}
                </div>
                <div className='mb2'>
                    <input type={`${display ? 'text' : 'password'}`} 
                    placeholder='Password*'
                    name='password'
                    id='password'
                    {...register('password', {required: 'Password is required'})} 
                    />
                    <button onClick={displayToggle}>{display ? 'Hide' : 'Show'}</button>
               </div>
               {errors.password && (<p className='error-msg' style={{margin: '0 1.5em'}}>{errors.password.message}</p>)}
               <div className='mb' style={{textAlign: 'right'}}>
                   <Link to='/forgot' style={{color: 'red', fontSize: '.8rem'}}>Forgot Password</Link>
               </div>
               <div className='mb'> 
                    <button type='submit'>Login</button>
               </div>
            </form>
        </div>
    )
}


export default LoginForm