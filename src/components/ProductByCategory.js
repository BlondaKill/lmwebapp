import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../utility/globals/colors'
import fonts from '../utility/globals/fonts'


const ProductByCategory = ({item}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:item.image}} resizeMode='cover'/>
            <Text style={styles.text}>{item.id} {item.title}</Text>
        </View>
    )
}

// {uri:item.thumbnail}
// require("../../assets/crep.jpeg")

export default ProductByCategory

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.primary,
        width:"80%",
        marginHorizontal: "10%",
        marginVertical: 10,
        padding: 10,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
        gap: 20
    },
    text:{
        width: "60%",
        fontSize:16,
        fontFamily: fonts.OleoScriptBold
    },
    image:{
        width: "30%",
        height: "30%",
        minWidth: 90,
        minHeight: 90,
        borderRadius: 5,
    }


})