import { StyleSheet, FlatList} from 'react-native'
import categories from '../utility/data/categories.json'
import CardCategory from './CardCategory'


const Categories = ({selectedCategoryState}) => {
  return (
    <FlatList
            data={categories}
            keyExtractor={item => item}
            renderItem={({item}) => <CardCategory item={item} selectedCategoryState={selectedCategoryState}/>}
        
    />
  )
}

export default Categories

const styles = StyleSheet.create({})