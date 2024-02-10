import { StyleSheet, Text, View } from 'react-native'
import Home from './src/screens/Home'
import { useEffect, useState } from 'react'
import ProductsByCategory from './src/screens/ProductsByCategory'
import {useFonts} from "expo-font"
import { fontGroup } from './src/utility/globals/fonts'



const App = () => {

  const [fontsLoaded] = useFonts(fontGroup)
  const [categorySelected, setCategorySelected] = useState("")

  if(!fontsLoaded) return null

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
