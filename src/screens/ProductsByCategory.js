import { FlatList, StyleSheet } from 'react-native'
import Header from '../components/Header'
import products from '../utility/data/products.json'
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory'
import Search from '../components/Search'



const ProductsByCategory = ({categorySelected}) => {

  const [productsFiltered, setProductsFiltered] = useState([])
  const [keyword, setKeyword] = useState("")
  
  const handlerKeyWord = (k) => {
    setKeyword(k)
  }

  useEffect(() => {
    if(categorySelected) setProductsFiltered(products.filter(product => product.category === categorySelected))
    if(keyword) setProductsFiltered(productsFiltered.filter(product => {
      const productTitleLower = product.title.toLowerCase() 
      const keywordLower = keyword.toLowerCase()
      return productTitleLower.includes(keywordLower)}))
  }, [categorySelected, keyword])




  return (
    <>
      <Header title={categorySelected}/>
      <Search handlerKeyWord={handlerKeyWord}/>
      <FlatList
        data={productsFiltered}
        keyExtractor={item => item.id}
        renderItem={({item})=> <ProductByCategory  item={item}/>} 
    />
    
    
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({})