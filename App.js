import { StyleSheet, Text, View } from 'react-native'
import Home from './src/screens/Home'
import { useEffect, useState } from 'react'
import ProductsByCategory from './src/screens/ProductsByCategory'
import {useFonts} from "expo-font"



const App = () => {

  const [fontsLoaded] = useFonts({
    "Cookie-Regular": require("./assets/fonts/Cookie-Regular.ttf"),
    "OleoScript-Bold": require("./assets/fonts/OleoScript-Bold.ttf"),
    "OleoScript-Regular": require("./assets/fonts/OleoScript-Regular.ttf")

  })
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
