import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import products from '../utility/data/products.json'
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory'
import Search from '../components/Search'



const ProductsByCategory = ({categorySelected}) => {

  const [productsFiltered, setProductsFiltered] = useState([])

  useEffect(() => {
    setProductsFiltered(products.filter(product => product.category === categorySelected))
  }, [categorySelected])




  return (
    <>
      <Header title={categorySelected}/>
      <Search/>
      <FlatList
        data={productsFiltered}
        keyExtractor={item => item.id}
        renderItem={({item})=> <ProductByCategory item={item}/> } 
    />
    
    
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({})