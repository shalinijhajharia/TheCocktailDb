
import React,{useState} from 'react';
import './logincss.css';
import { useParams} from 'react-router-dom'

import { Link } from 'react-router-dom';

 const Forgotpass = () => {
  const [username,setUsername]= useState('');
  const [selects,setSelects]=useState('');
  const [answer,setAnswer]= useState('');
  var auth = JSON.parse(localStorage.getItem('auth'));
  const {id} = useParams();
  const handleRegister=()=>{

    	if(auth===null){
			alert('no user found!');
		}

    const same = auth.filter(d=>d.username===username);
    

    
		if(same.length!==0){
      
			if (same[0].selects===selects && same[0].answer===answer){
       
				 var retrivepass=(same[0].password1);
				setUsername('');
				setAnswer('');
        
        document.getElementById("display").innerHTML=retrivepass;
      
			}
			else{
				alert('wrong answer.');
			}
		}else{
			alert(username+'user not exist!')
		}
			
  }

    return (
      
        <div className="main">
        <div className="sub-mainforgot">
          <div>
           <div className="imgs">
             <div className="container-image">
               <img src="https://kutumba-apps.karnataka.gov.in/forms/Images/Profile.png" alt="profile" className="profile" />
             
               </div>
           </div>
           <div>
             <h2>Forgot Password</h2><br/>
             <div>
             <input type="text" value={username}onChange={e=>setUsername(e.target.value)} placeholder="username" className="name" id="username"/>
         
        
             </div><br/>
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
             <div>
             <button className="registerbtn" id="login" onClick={handleRegister}>Submit</button>
             </div><br/>
              <p placeholder="display" id="display"></p><br/>
           
               <p className="link">
               <Link to={`/login/${id}`} className="link">
         Login
      </Link> 
      
        
               </p>
            
           </div>
             
   
           
   
          </div>
   
        </div>
      </div>
    )
}

export default Forgotpass;
