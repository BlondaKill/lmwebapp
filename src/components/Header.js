import { StyleSheet, Text, View, Platform, Pressable } from 'react-native'
import colors from '../utility/globals/colors'
import fonts from '../utility/globals/fonts'
import {AntDesign} from "@expo/vector-icons"
import { useDispatch, useSelector } from 'react-redux'
import { deleteSession } from '../utility/db'


const Header = ({title="Rochino", navigation}) => {

    const idToken = useSelector(state => state.auth.idToken)
    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(clearUser())
        deleteSession()
    }

    return  <View style={styles.container}>
                {navigation.canGoBack() && 
                <Pressable style={styles.goBack} onPress={()=> navigation.goBack()}>
                    <AntDesign name="arrowleft" size={25} color="black"/>
                </Pressable>}
                <Text style={styles.text}>{title}</Text>
                {idToken && (
                    <Pressable style={styles.logoutIcon} onPress={onLogout}>
                    <AntDesign name="logout" size={30} color="black"/>

                    </Pressable>
                )

                }
            </View>

}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.primary,
        height: Platform.OS === "ios" ? 40 : 80,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        position: "relative"
    },
    text:{
        fontSize:60,
        fontFamily: fonts.CookieRegular
    },
    goBack: {
        position: "absolute",
        left: 10,
        bottom: 25
    },
    logoutIcon:{
        position:"absolute",
        right:10,
        bottom:15
    }

})