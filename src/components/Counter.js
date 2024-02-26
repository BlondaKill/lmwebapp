import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const Counter = () => {

    const [number, setNumber] = useState(0)
    const [count, setCount] = useState(0)

    return (
        <View style={styles.counterContainer}>
            <Button title='+' onPress={()=> setCount(count + 1)}/>
            <Text>{count}</Text>
            <Button title='-'  onPress={ ()=> setCount(count - 1) }/>
            <TextInput style={styles.input} onChangeText={ (t) => setNumber(parseInt(t)) }/>
            <Button title='monto' onPress={ ()=> setCount(number) } />
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