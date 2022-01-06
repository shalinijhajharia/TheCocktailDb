import React from 'react'
import App1 from './App1'
import WriteReview from './WriteReview';

function MainApp1  () {
    return (
        <>
        <div className="app">
          
            <div><WriteReview/></div>
            
            <div className='review-border'><App1/></div>
            
        </div>
        </>
    );
}
export default MainApp1;

