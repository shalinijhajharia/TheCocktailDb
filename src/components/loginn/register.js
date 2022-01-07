import React, { useState } from 'react'
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai';
import './logincss.css';
import { Link } from 'react-router-dom'

import { useParams} from 'react-router-dom'

const Register = () => {

  const {id} = useParams();
  const [selects,setSelects]=useState('');
  const [answer,setAnswer]= useState('');
  const [username,setUsername]= useState('');
  const [email,setEmail]= useState('');
  const [dob,setDob]= useState('');
  
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');
  const [state,setState]=useState(false)
  const toggleBtn=()=>{
    setState(prevState=>!prevState);
  }
	
  var auth = JSON.parse(localStorage.getItem('auth'));

 
  const handleRegister=()=>{
    if(auth===null){
			auth=[{'username':'aaa','email':'abc@gmail.com','dob':'01-01-2000','password':'aaa','selects':selects,'answer':answer},];
		}
			
    if(password1===password2)
    {
      const same = auth.filter(d=>d.username===username);

			if(same.length===0){
				auth = [...auth,{'username':username,'email':email,'dob':dob,'password1':password1,'password2':password2,'selects':selects,'answer':answer}];
				localStorage.setItem('auth',JSON.stringify(auth));
				localStorage.setItem('userlogined',(username));
        
				setUsername('');
        setEmail('');
        setDob('');
				setPassword1('');
				setPassword2('');
        setSelects('');
        setAnswer('');

        alert(username+'registered successfully');
        window.open('/theCocktaildb/#/login/'+id,'_self')
				
			}else{
				alert(username+' exist!');
        setUsername('');
        setEmail('');
        setDob('');
				setPassword1('');
				setPassword2('');
        setSelects('');
        setAnswer('');
			}

    }
    else{
      alert('Passwords are not matching');
    }
  }
  return (
    <div className="main">
    <div className="sub-mainregister">
      <div>
       <div className="imgs">
         
           <img src="https://kutumba-apps.karnataka.gov.in/forms/Images/Profile.png" alt="profile" className="profile" />
         
         
       </div>
       <div>
         <h1>Register</h1><br/>
         <div>
         <input type="text" value={username}onChange={e=>setUsername(e.target.value)} placeholder="username" className="name" id="username"/>
         
         </div><br/>
         <div>
         <input type="email" value={email}onChange={e=>setEmail(e.target.value)} placeholder="Email" className="name" id="email"/>
         </div><br/>
         <div>
         <input type="date" value={dob}onChange={e=>setDob(e.target.value)} placeholder="DOB" className="name" id="dob"/>
         
          
         </div><br/>
         <div >
               {/* <img src="../image/pass.png" alt="pass" className="pass"/> */}
               <input type={state?"text":"password"} id="pass" placeholder="Password" className="name"/>
               <button className="hidebtn" onClick={toggleBtn}>
                {
                  state? <AiOutlineEye/>:<AiOutlineEyeInvisible/>
                   
                }
                 </button>
		            {/* <button onClick={()=>{setPassType(!passType)}} className="hidebtn">{passType?'show':'hide'}</button> */}
             </div><br/>
         
         <div >
               {/* <img src="../image/pass.png" alt="pass" className="pass"/> */}
               <input type={state?"text":"password"} id="pass" placeholder="Confirm Password" className="name"/>
               <button className="hidebtn" onClick={toggleBtn}>
                {
                  state? <AiOutlineEye/>:<AiOutlineEyeInvisible/>
                   
                }
                 </button>
		            {/* <button onClick={()=>{setPassType(!passType)}} className="hidebtn">{passType?'show':'hide'}</button> */}
             </div><br/>
         <div>
         <div >
              <label> <b>Security question:</b></label> <br/>   
                  <select value={selects} onChange={e=>setSelects(e.target.value)} className="dropdown" >
                    <option value="q0">---------------------------Select---------------------------</option>
                    <option value="q1">Your birth city</option>
                    <option value="q2">Your mother's name</option>
                    <option value="q3">Your high school's name</option>
                    <option value="q4">Your favourite color</option>
                  </select>
             </div><br/> 
              <div>
               <input type="text" value={answer}onChange={e=>setAnswer(e.target.value)} placeholder="Answer" className="name" id="answer"/>
              

             </div><br/><br/>
         <button onClick={handleRegister}  className="registerbtn">Register</button>
         </div>
       <br/>
         <Link to={`/login/${id}`} className="link">
         Login
      </Link> 
        
        
       </div>
         

       

      </div>

    </div>
  </div>
  )

  }
export default Register;
