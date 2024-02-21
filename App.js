import { StatusBar } from 'react-native'
import {useFonts} from "expo-font"
import { fontGroup } from './src/utility/globals/fonts'
import colors from './src/utility/globals/colors'
import MainNavigator from './src/navigation/MainNavigator'






const App = () => {

  const [fontsLoaded] = useFonts(fontGroup)
  if(!fontsLoaded) return null



  return (
    <>
      <StatusBar backgroundColor={colors.grey} barStyle={'dark-content'}/>
      <MainNavigator/>
    </>
  )
}

export default App


