import React from 'react'
import Cocktail from './Cocktail'

import { useGlobalContext } from '../context'

const CocktailList = () => {
  const{cocktails}=useGlobalContext()
  // if(loading){
  //   return <Loading/>
  // }
  if(cocktails.length < 1)
  {
    return(
      <section className='section'>
        <h2 className="section-title">
      No Cocktails Matched your search criteria
      </h2>
      </section>
    )
     
  }
  return (
    <section className="section">
      <h2 className="section-title">cocklist</h2>
      <div className='cocktails-center'>
      {cocktails.map((item)=>{
        return <Cocktail key={item.id}{...item}/>
      })}
      </div>
    
    </section>
  )
}

export default CocktailList
