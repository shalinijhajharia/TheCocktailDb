import React from 'react'
import App1 from './App1'
import WriteReview from './WriteReview';
// import {Switch,Route} from 'react-router-dom'
function MainApp1  () {
    return (
        <>
        <div className="app">
            {/* <Switch>
               
                <Route path="/WriteReview" exact component={WriteReview}/>
                <Route path="/Review" exact component={App1}/>
            </Switch> */}
            {/* <h1>hello</h1> */}
            <div><WriteReview/></div>
            
            <div className='review-border'><App1/></div>
            
        </div>
        </>
    );
}
export default MainApp1;

