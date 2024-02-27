import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice'


const Counter = () => {

    const dispatch = useDispatch()
    const [number, setNumber] = useState(0)
    const count = useSelector((state => state.counter.value))
 
    return (
        <View style={styles.counterContainer}>
            <Button title='+' onPress={()=> dispatch(increment())}/>
            <TextInput style={styles.input} value = {count.toString()} onChangeText={ (t) => setNumber(parseInt(t)) }/>
            <Button title='-'  onPress={ ()=> dispatch(decrement()) }/>
            
            <Button title='cantidad' onPress={ ()=> dispatch(incrementByAmount(number)) } />
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
        counterContainer:{
            width: 200,
            flexDirection:"row",
            justifyContent:"space-around",
            alignItems:"center",
            margin:10
        },
        input:{
            textAlign: "center",
            borderWidth:2,
            width:50,
        }



})