import { StyleSheet, Text, View, Platform } from 'react-native'
import colors from '../utility/globals/colors'
import fonts from '../utility/globals/fonts'


const Header = ({title="Rochino"}) => {
    return  <View style={styles.container}>
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
        alignItems:"center"
    },
    text:{
        fontSize:60,
        fontFamily: fonts.CookieRegular
    }


})