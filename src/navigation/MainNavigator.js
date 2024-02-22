import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from './ShopStack';
import CartStack from './CartStack';
import OrdersStack from './OrdersStack';
import colors from '../utility/globals/colors';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='ShopStack'
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar
                }}
            >
                <Tab.Screen name='ShopStack' component={ShopStack}/>
                <Tab.Screen name='CartStack' component={CartStack}/>
            </Tab.Navigator>
        </NavigationContainer>
        
    )
}

export default MainNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: colors.grey,
        height: 60
    }

    

})