import axios from "axios";
import { useState} from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";
import { baseurl } from "../urls";


const Registrationform = ()=>
{
     const[codeField, setCodeField] = useState(false)
     

     const {
          register, 
          handleSubmit, 
          formState: {errors},
          trigger,
     } = useForm();

     const codetoggle = ()=>{
          setCodeField(!codeField)
          toast.success('You are register')
     }

     const onSubmit = (data)=>
     {
         
          if(data.role === 'TEACHER')
          {
               try{
                    axios.post(
                         `${baseurl}/registerteacher`, data)
                    .then((response)=>{
                         console.log('This is response', response)
                         toast.success('You are register')
                    }, (error)=>{
                         console.log('this is error ', error.response.data)
                         toast.error(error.response.data)
                    })
               }catch(error)
               {
                    console.log(error)
               }
          }
          else if(data.role === 'STUDENT')
          {
               try{
                    axios.post(
                         `${baseurl}/registerstudent`, data)
                    .then((response)=>{
                         console.log('This is response', response)
                         toast.success('You are register')
                    }, (error)=>{
                         console.log('this is error ', error.response.data)
                         toast.error(error.response.data)
                    })
               }catch(error)
               {
                    console.log(error)
               }
          }
          return 'afljadlfj'
     }

    return (
    <>
       <div className='frm-sec'>
           <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb'><h3>REGISTER</h3></div>
               <div className='mb'>
                    <input type='text' 
                    placeholder='Full Name*'
                    name='name'
                    {...register('name', {required: 'Name is required', maxLength:{value: 50, message:'Maximum 50 Character'}})}
                    onKeyUp={()=>{trigger('name')}}
                    />
                    {errors.name && (<p className='error-msg'>{errors.name.message}</p>)} 
               </div>
               
               <div className='mb'>
                    <input type='email' 
                    placeholder='E-mail*'
                    name='email' 
                    {...register('email', {required: 'Email is required', 
                    pattern:
                         {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                              message: 'Email is invalid'
                         }
                    })
                    }
                    onKeyUp={()=>{trigger('email')}} 
                    />
                    {errors.email && (<p className='error-msg'>{errors.email.message}</p>)} 
               </div>
               <div className='mb'>
                    <input type='password' 
                    placeholder='Password*'
                    name='password' 
                    {...register('password', {required: 'Password is required', minLength:{value: 6, message:'Password must be 6'}})}
                    onKeyUp={()=>{trigger('password')}}
                    />
                    {errors.password && (<p className='error-msg'>{errors.password.message}</p>)} 
                    
               </div>
               <div className='mb'>
                    <label htmlFor="role">Select role: </label>
                    <select name="role" id="role" {...register('role', {required: 'role is required'})} >
                    <option 
                    value="TEACHER"
                    onClick={()=>{setCodeField(false)}} >TEACHER</option>
                    <option 
                    value="STUDENT"
                    onClick={codetoggle}>STUDENT</option>
                </select>
               </div>
               <div style={{display: `${codeField ? '':'none'}`}} className='mb'>
                    <input 
                    type='text'
                    name='classCode' 
                    placeholder='Class Code*'
                    {...register('classCode')} 
                    />
                    {errors.classCode && (<p className='error-msg'>{errors.classCode.message}</p>)} 
               </div>
              
               <div className='mb'> 
                    <button type='submit'>Register</button>
               </div>
               
               
           </form>
       </div>
    
    </>)
}

export default Registrationform



//&& formData.name.length > 0 && formData.email.length > 0 && formData.password.length > 0 && formData.classCode.length > 0