import React, {useState} from 'react';


const Register =(props) => {
 const [userInputs, setUserInputs] = useState({firstName: '', lastName: '', email: '', password: ''})
 const [submitted, setSubmitted] = useState(false)

 handleFormChange = (e) => {
   const {name, value} = e.target;
   
   setUserInputs(state => ({
     ...state, 
     [name]: value,
   }))
 }

 handleSumbit = (e) => {
   e.preventDefault()

   setSubmitted(true)

   if (Object.keys(userInputs).every(k => userInputs[k] === true)) {
     //this.props.register(userInputs) --- must create register Action
   }

 }

 return (
   <div className="col-md-6 col-md-offset-3"> 
        {/* why are my tabs messed up  */}
   </div> 

 )
  
}

export default Register;