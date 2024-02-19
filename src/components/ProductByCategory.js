import { StyleSheet, Text, Image, Pressable } from 'react-native'
import colors from '../utility/globals/colors'
import fonts from '../utility/globals/fonts'


const ProductByCategory = ({item, navigation}) => {
    return (
        <Pressable onPress={() => navigation.navigate("ProductDetail", {productId:item.id})} style={styles.container}>
            <Image style={styles.image} source={{uri:item.image}} resizeMode='cover'/>
            <Text style={styles.text}>{item.id} {item.title}</Text>
        </Pressable>
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
        minWidth: 90,
        minHeight: 90,
        borderRadius: 5,
    }


})