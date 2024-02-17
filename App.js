import { StatusBar, StyleSheet } from 'react-native'
import Home from './src/screens/Home'
import {useFonts} from "expo-font"
import { fontGroup } from './src/utility/globals/fonts'
import colors from './src/utility/globals/colors'
import ProductsByCategory from './src/screens/ProductsByCategory'
import ProductDetail from './src/screens/ProductDetail'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {

  const [fontsLoaded] = useFonts(fontGroup)
  if(!fontsLoaded) return null



  return (
    <>
      <StatusBar backgroundColor={colors.grey} barStyle={'dark-content'}/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="ProductsByCategory" component={ProductsByCategory}/>
          <Stack.Screen name="ProductDetail" component={ProductDetail}/>
          
        </Stack.Navigator> 
      </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})
