import { StyleSheet, Text, View, FlatList} from 'react-native'
import categories from '../utility/data/categories.json'
import CardCategory from './CardCategory'


const Categories = () => {
  return (
    <FlatList
            data={categories}
            keyExtractor={item => item}
            renderItem={({item}) => <CardCategory item={item}/>}
        
    />
  )
}

export default Categories

const styles = StyleSheet.create({})