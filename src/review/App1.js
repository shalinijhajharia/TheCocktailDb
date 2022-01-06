import React from 'react';
import Review from './Review';


function App1() {
  return (
    <div className="reviews">
    <main>

      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
         
        </div>
        <Review/>
      </section>
    </main>
    </div>
  );
}
export default App1;
