import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'


const ProductsByCategory = () => {
  return (
    <>
    <Header title={categorySelected || "Productos"}/>
    <Search handlerKeyword={handlerKeyword}/>
    <FlatList
      style={styles.container}
      data={productsFiltered}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ProductsByCategory item={item}/>} 
    />
    
    
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({})