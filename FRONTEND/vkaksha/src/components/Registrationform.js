import axios from "axios";
import { useState} from "react"
import { useForm } from "react-hook-form"
import 'react-toastify/dist/ReactToastify.css';
import { baseurl } from "../urls";



const Registrationform = ()=>
{
     const[codeField, setCodeField] = useState(false)
     
     const {
          register, 
          handleSubmit,
          reset, 
          formState: {errors},
          trigger,
     } = useForm();

     const codetoggle = ()=>{
          setCodeField(!codeField)    
     }


     const onSubmit = (data)=>
     {
         
          if(data.role === 'TEACHER')
          {
               try{
                    axios.post(
                         `${baseurl}/registerteacher`, data)
                    .then((response)=>{
                         console.log(response)
                         let mssg = response.data.name + ' you are registered Successfully';
                         alert(mssg)
                         reset()
                    }, (error)=>{
                         let mssg = error.response.data + 'try different email';    
                         alert(mssg)
                         reset()
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
                         let mssg = response.data.name + ' you are registered Successfully';
                         alert(mssg)
                         reset()
                    }, (error)=>{
                         let mssg = error.response.data;
                         alert(mssg)
                         console.log(error.response.data)
                         reset()
                         
                    })
               }catch(error)
               {
                    console.log('catch block: ' + error)
               }
          }
     }

    


    return (
    <>
       <div className='frm-sec'>
           <form onSubmit={handleSubmit(onSubmit)}>
               <div className='mb'>
                    <h3>REGISTER</h3>
               </div>
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
                    <label htmlFor="role" style={{margin: '0 1em'}}>Select role: </label>
                    <select name="role" id="role" {...register('role', {required: 'role is required'})} 
                    onChange={codetoggle}>
                         <option value="TEACHER" >TEACHER</option>
                         <option value="STUDENT" >STUDENT</option>
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
           {/* <button onClick={tester}>click me</button> */}
       </div>
    
    </>)
}

export default Registrationform
