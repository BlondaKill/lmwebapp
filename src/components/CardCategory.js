import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardCategory = ({item}) => {
    return (
        <View style={styles.container}>
            <Text>{item}</Text>
        </View>
    )
}

export default CardCategory

const styles = StyleSheet.create({
    container:{
        width: "80%",
        backgroundColor: "#aeadad",
        marginHorizontal:"10%",
        marginVertical:10,
        padding:20,
        alignItems: "center",
        borderRadius:5,


    },
    text:{
        fontSize:16,
    }    
})