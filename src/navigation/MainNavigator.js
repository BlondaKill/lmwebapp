import { NavigationContainer } from '@react-navigation/native';
import ShopStack from './ShopStack';
import CartStack from './CartStack';
import OrdersStack from './OrdersStack';



const MainNavigator = () => {
    return (
        <NavigationContainer>
            <OrdersStack/>
        </NavigationContainer>
        
    )
}

export default MainNavigator