import { StyleSheet, Text, View } from 'react-native'


const Categories = () => {
  return (
    <FlatList
            data={categories}
            keyExtractor={item => item}
            renderItem={({item}) => (<View><Text>{item}</Text></View>)}
        
        />
  )
}

export default Categories

const styles = StyleSheet.create({})