import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)
    return (
        <View style={styles.counterContainer}>
            <Button title='Aumentar' onPress={()=> }/>
            <Text>{count}</Text>
            <Button title='Disminuir'  onPress={ ()=>  }/>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
        counterContainer:{
            flexDirection:"row",
            justifyContent:"space-around",
            alignItems:"center",
            margin:10
        },
        input:{
            borderWidth:2,
            width:50,
        }



})