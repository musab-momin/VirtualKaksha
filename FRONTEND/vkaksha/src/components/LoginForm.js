import axios from "axios";
import React from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { baseurl } from "../urls";


const LoginForm = ()=>
{

    const{register, handleSubmit, formState:{errors}, reset} = useForm();
   

    const onSubmit = (data)=>
    {
        try
        {
            axios.post(`${baseurl}/`, data)
            .then((response)=>
                {
                    console.log(response)
                    alert(response)
                },(error)=>
                {
                    console.log('This is error: ', error)
                    
                }
            );
                

        }catch(error)
        {
            console.log('This is catch: ', error)
        }
        reset()
    }
    

    //form css


    return(
        <div className='frm-sec'>
            <form style={{height: '450px'}} onSubmit={handleSubmit(onSubmit)}>
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
                <div className='mb'>
                    <input type='password'
                    placeholder='Password*'
                    name='password'
                    id='password'
                    {...register('password', {required: 'Password is required'})} 
                    />
                    {errors.password && (<p className='error-msg' >{errors.password.message}</p>)}
               </div>
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