import { StyleSheet, Text, View } from 'react-native'
import Home from './src/screens/Home'
import { useEffect, useState } from 'react'
import ProductsByCategory from './src/screens/ProductsByCategory'



const App = () => {

  const [categorySelected, setCategorySelected] = useState("")

  const selectedCategoryState = (category) => {
    setCategorySelected(category)
  }
  

  return (
    <>
      {categorySelected ? 
                <ProductsByCategory categorySelected={categorySelected}/>
                :
                <Home selectedCategoryState = {selectedCategoryState}/>
                
      }
    </>
  )
}

export default App

const styles = StyleSheet.create({})
