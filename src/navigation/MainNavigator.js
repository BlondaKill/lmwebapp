import { NavigationContainer } from '@react-navigation/native';
import ShopStack from './ShopStack';



const MainNavigator = () => {
    return (
        <NavigationContainer>
            <ShopStack/>
        </NavigationContainer>
        
    )
}

export default MainNavigator