import { StyleSheet, Text, View } from 'react-native'
import { Entypo} from '@expo/vector-icons'



const TabBarIcon = ({title, nameIcon, focused}) => {
    return (
        <View style={styles.container}>
        <Entypo name={nameIcon} size={25} color={focused ? "#f78d8d":"rgba(255,255,255,0.6)"}/>  

        <Text>{title}</Text>
        </View>
    )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: {
        color: "black",
        textAlign: "center",
        fontSize:15,
        fontWeight: "bold"
    }


})