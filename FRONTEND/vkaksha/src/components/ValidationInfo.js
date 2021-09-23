const ValidateInfo = (value) =>
{
    let errors = {}
    if(!value.name.trim())
    {
        errors.name = "Username is required"
    }
    if(!value.email.trim())
    {
        errors.email = 'Email required'
    }else if(!/^[A-Z0-9,_%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i.test(value.email)){
        errors.email = "Email is invalid"
    }
    if(!value.password.trim())
    {
        errors.password = 'Password required'
    }else if(value.password.length < 6){
        errors.password = "Password should contain 6 char"
    }
    if(!value.classCode.trim())
    {
        errors.classCode = 'Class Code is required'
    }

    return errors;
} 

export default ValidateInfo