import { StyleSheet, FlatList, Text, View } from 'react-native'
import { useGetCategoriesQuery } from '../app/services/shop'
import CardCategory from './CardCategory'
import LoadingSpinner from './LoadingSpinner'
import EmptyList from './EmptyList'


const Categories = ({navigation}) => {

  const {data: categories, isError, isLoading, isSuccess} = useGetCategoriesQuery()


  if(isLoading) return <LoadingSpinner/>
  if(isError) return <View><Text>Error</Text></View>
  if(isSuccess && categories === null) return <EmptyList message= "Sin Categorias"/>

  return (
    <FlatList
            data={categories}
            keyExtractor={item => item.title}
            renderItem={({item}) => <CardCategory item={item} navigation={navigation}/>}
        
    />
  )
}

export default Categories

const styles = StyleSheet.create({})