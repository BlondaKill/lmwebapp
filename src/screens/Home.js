import { StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'



const Home = ({navigation}) => {
    
  return (
    <>
        <Header title="Home"/>
        <Categories navigation={navigation}/>
        
        
    </>
  )
}

export default Home

const styles = StyleSheet.create({})