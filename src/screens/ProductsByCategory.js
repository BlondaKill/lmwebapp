import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import products from '../utility/data/products.json'



const ProductsByCategory = ({categorySelected}) => {
  return (
    <>
      <Header title={categorySelected}/>
      <FlatList

        data={products}
        keyExtractor={item => item.id}
        renderItem={({item})=> <View><Text>{item.title}</Text></View> } 
    />
    
    
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({})