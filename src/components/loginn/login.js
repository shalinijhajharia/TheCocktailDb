import React,{useState} from 'react';
import './logincss.css';
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai';

import {Link} from 'react-router-dom';
import { useParams} from 'react-router-dom'
// import { icons } from 'react-icons/lib';
//import { useLocation } from 'react-router-dom'
//let myid='';
const Login = () => {

  const {id} = useParams();
  // const location=useLocation();
  //  const isAuth=useAuth();
  // const navigate=useNavigate();
  const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
  // const [passType, setPassType] = useState(true);
 const [state,setState]=useState(false)
 const toggleBtn=()=>{
   setState(prevState=>!prevState);
 }
//     const location = useLocation()
// // myid=location.state.id;
// console.log(location.state.cocktailid);



	var auth = JSON.parse(localStorage.getItem('auth'));
  const handleLogin=()=>{

		if(auth===null){
			alert('no user found!');
		}
			
			
		const same = auth.filter(d=>d.username===username);

		if(same.length!==0){

			if (same[0].password1===password){

				localStorage.setItem('userlogined',username);
				setUsername('');
				setPassword('');
      // console.log(id);
         window.open('/theCocktaildb/#/Cocktail/'+id,'_self')
       
      
			}
			else{
				alert('wrong password.');
			}
		}else{
			alert(username+'user not exist!')
		}
	}
    return (
      <div className="main">
        <div className="sub-main">
          <div>
           <div className="imgs">
             <div className="container-image">
               <img src="https://kutumba-apps.karnataka.gov.in/forms/Images/Profile.png" alt="profile" className="profile" />
             
               </div>
           </div>
           <div>
             <h1>Login</h1>
             <div>
               {/* <img src={email} alt="email" className="email" /> */}
               
               <input type="text" value={username} onChange={e=>setUsername(e.target.value)}placeholder="username" className="name" id="username"/>
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
             <div>
             <button onClick={handleLogin} className="registerbtn">Login</button>
             </div>
           
               <p className="link">
                 
                 
                 <Link to={`/register/${id}`} className="link">
                 Don't have an account? Sign Up
             </Link> <br/>
             <Link to={`/Forgotpass/${id}`} className="link">
             Forgot password? 
             </Link>
               </p>
            
           </div>
             
   
           
   
          </div>
   
        </div>
      </div>
  );
}

export default Login;
