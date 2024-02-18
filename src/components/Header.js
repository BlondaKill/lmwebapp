import { StyleSheet, Text, View, Platform, Pressable } from 'react-native'
import colors from '../utility/globals/colors'
import fonts from '../utility/globals/fonts'
import {Ionicons} from "@expo/vector-icons"


const Header = ({title="Rochino", navigation}) => {
    return  <View style={styles.container}>
                {navigation.canGoBack() && 
                <Pressable style={styles.goBack} onPress={()=> navigation.goBack()}>
                    <Ionicons name='arrow-back-circle-outline' size={30} color="black"/>
                </Pressable>}
                <Text style={styles.text}>{title}</Text>
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
    }


})