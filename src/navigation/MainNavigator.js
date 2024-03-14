import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import AuthStack from './AuthStack';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchSession } from '../utility/db';
import { setUser } from '../features/auth/authSlice';

const MainNavigator = () => {

        const dispatch = useDispatch()
        const user = useSelector ((state) => state.auth)

        useEffect(()=> {
            (async()=>{
            const session = await fetchSession()
            if (session.rows.lenght){
                const user = session.rows._array[0]
                dispatch(setUser(user))
            }
            })()
        }, [])    

    return (
        <NavigationContainer>
            {user.idToken ? <TabNavigator/> : <AuthStack/>}
        </NavigationContainer>
        
    )
}

export default MainNavigator

