import { StyleSheet, View } from 'react-native'
import Home from './src/screens/Home'
import { useState } from 'react'
import ProductsByCategory from './src/screens/ProductsByCategory'
import {useFonts} from "expo-font"
import { fontGroup } from './src/utility/globals/fonts'
import ProductDetail from './src/screens/ProductDetail'



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
    <View style={styles.container}>
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
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})
