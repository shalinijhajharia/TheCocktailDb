import React, { useState, useContext, useEffect, useReducer } from 'react'
import { useCallback } from 'react'

import cartItems from './components/cart/product'
import reducer from './components/cart/reducer'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()
const initialState={
  loading:false,
  cart:cartItems,
  total:0,
  amount:0,

}

const AppProvider = ({ children }) => {
  const [loading,setLoading]=useState(true)
  const [searchTerm,setSearchTerm]=useState('')
  const [cocktails,setCocktails]=useState([])
  const [state, dispatch] = useReducer(reducer,initialState) 

  const clearCart=()=>
  {
    dispatch({type:'CLEAR_CART'})
  }
  const addCart=(data)=>
  {
    dispatch({type:'ADD', payload:data})
  }
  const remove=(id)=>
  {
      dispatch({type:'REMOVE',payload:id})
  }
  const increase=(id)=>
  {
    dispatch({type:'INCREASE',payload:id})
  }
  const decrease=(id)=>
  {
    dispatch({type:'DECREASE',payload:id})
  }
  

  const fetchDrinks = useCallback(async() => {
    setLoading(true)
    try{
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json();
      const {drinks} = data;
     
      if(drinks){
          const newCocktails = drinks.map((item)=>{
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
            }=item
            return {
              id:idDrink,
              name:strDrink,
              image:strDrinkThumb,
              info:strAlcoholic,
              glass:strGlass,
            }
          })
          setCocktails(newCocktails)
      }
      else{
        setCocktails([])
      }
      setLoading(false)
    }
    catch(error){
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])

  useEffect(()=>{
    fetchDrinks()
  },[searchTerm, fetchDrinks])

  useEffect(()=>{
    dispatch({type:'GET_TOTALS'})
  },[state.cart])
  


  return <AppContext.Provider 
  value={{
    ...state,
    clearCart,
    addCart,
   remove,
        increase,
        decrease,
    loading,
    cocktails,
    setSearchTerm,
    searchTerm,
  }}>
    {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
