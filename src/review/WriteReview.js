import React, { useState } from 'react';
import reviews from './data'

import finger from './finger.svg';


function WriteReview  () {
    const [username,setUsername]=useState('');
    const [designation,setDesignation]=useState('');
    const [review,setReview]=useState('');
    
    const [error,setError] = useState(null)
    const [usererror,setUserError] = useState(null)
    const [deserror,setDesError] = useState(null)
    const [reverror,setRevError] = useState(null)
    
    
    const sentData=()=>
    {
        
        if(username!=='' && designation!=='' && review!=='' )
        {
           setUserError('');
           setRevError('');
           setDesError('');
                let len=reviews.length;
                let val={
                    id: len+1,
                    name: username,
                    job: designation,
                    image: 'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg',
                    text:review,
                }
                reviews.unshift(val)
                setError(`Review Submitted. Check it on OUR REVIEWS`)
                console.log(reviews)
                
        }
        else{
        if(username==='')
        {
            setUserError(" Please enter Username")
        }
        else{
            setUserError('')
        }
        if(designation==='')
        {
            setDesError(" Please enter designation")
        }
        else{
            setDesError('')
        }
        if(review==='')
        {
           setRevError(" Please enter review")
        }
        else{
            setRevError('')
        }
        setError('')
    
    }
        

    }

    // const changeHandler =(e)=>{
    //     let selected = e.target.files[0];
    //     console.log(selected)
    //     if (selected && types.includes(selected.type))
    //     {
    //         setFile(selected);
    //         setError('')
    //     }
    //     else{
    //         setFile(null);
    //         setError('Please select an image file (png or jpeg)');
    //     }
    // }
    return (

        <div className="review-main">
        <div className="title2">
        <h2>Write Something</h2></div>
        <div className="underline2"></div>
        <div className="write-review">
           
            
            <input placeholder="Username" type="text" className="review-item" onChange={(e)=>setUsername(e.target.value)}/>
            { usererror && <div className="errorfile">{ usererror }</div>}
            <input placeholder="Designation" type="text" className="review-item" onChange={(e)=>setDesignation(e.target.value)}/>
            { deserror && <div className="errorfile">{ deserror }</div>}
            <textarea  placeholder="review"id="review" name="review" rows="4" cols="30"className="review-item" onChange={(e)=>setReview(e.target.value)}/>
            {reverror && <div className="errorfile">{ reverror }</div>}
            
            <button type="submit" id="reviewbtn" className="review-item" onClick={sentData}>SUBMIT</button>
            { error && <div className="errorfile">{ error }<img src={finger} alt='finger' className='finger'/></div>}
          
            
        </div>
        
        </div>
       
    );
}
export default WriteReview;

