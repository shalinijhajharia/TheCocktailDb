import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm, searchTerm}=useGlobalContext()
  const searchValue = React.useRef('');

  React.useEffect(() => {
   searchValue.current.focus()
  }, [])

  const searchCocktail=(e)=>{
    e.preventDefault()
    setSearchTerm(searchValue.current.value)
  }
  
  

  return (
    <section className="section search" style={{zIndex:"20"}}>
      <form  className="search-form" >
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" id="name" value={searchTerm} ref={searchValue} onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
