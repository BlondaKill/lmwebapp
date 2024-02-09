import { StyleSheet, Text, View } from 'react-native'


const ProductByCategory = ({item}) => {
  return (
    <View style={styles.container}>
      <Text>{item.id} {item.title}</Text>
    </View>
  )
}

export default ProductByCategory

const styles = StyleSheet.create({})