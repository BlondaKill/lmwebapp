import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import products from '../utility/data/products.json'
import { useEffect, useState } from 'react'



const ProductsByCategory = ({categorySelected}) => {

  const [productsFiltered, setProductsFiltered] = useState([])

  useEffect(() => {
    setProductsFiltered(products.filter(product => product.category === categorySelected))
  }, [categorySelected])




  return (
    <>
      <Header title={categorySelected}/>
      <FlatList
        data={productsFiltered}
        keyExtractor={item => item.id}
        renderItem={({item})=> <View><Text>{item.title}</Text></View> } 
    />
    
    
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({})