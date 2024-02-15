import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native'
import Home from './src/screens/Home'
import { useState } from 'react'
import ProductsByCategory from './src/screens/ProductsByCategory'
import {useFonts} from "expo-font"
import { fontGroup } from './src/utility/globals/fonts'
import ProductDetail from './src/screens/ProductDetail'
import colors from './src/utility/globals/colors'



const App = () => {

  const [fontsLoaded] = useFonts(fontGroup)
  const [categorySelected, setCategorySelected] = useState("")

  const [productId, setProductId] = useState(0)

  if(!fontsLoaded) return null

  const selectedCategoryState = (category) => {
    setCategorySelected(category)
  }

  const selectedProductId = (id) => {
    setProductId(id)
  }

  

  return (
    <>
    <StatusBar backgroundColor={colors.grey} barStyle={'dark-content'}/>
      <SafeAreaView style={styles.container}>
        {categorySelected ? 
                  productId ?
                    <ProductDetail 
                      productId={productId}/>
                    :
                    <ProductsByCategory 
                    selectedProductId = {selectedProductId} 
                    categorySelected={categorySelected}/>
                  :
                  <Home selectedCategoryState = {selectedCategoryState}/>
                  
        }
    </SafeAreaView>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})
