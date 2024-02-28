import { StyleSheet, Text, View } from 'react-native'
import { Entypo} from '@expo/vector-icons'
import colors from '../utility/globals/colors'



const TabBarIcon = ({title, nameIcon, focused}) => {
    return (
        <View style={styles.container}>
        <Entypo name={nameIcon} size={25} color={focused ? "#f78d8d": colors.white}/>  
        <Text style={[styles.text, focused && styles.textFocused]}>{title}</Text>
        </View>
    )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: {
        color: colors.black,
        textAlign: "center",
        fontSize:15,
        fontWeight: "bold"
    },
    textFocused:{
        color: colors.primary,
    }


})