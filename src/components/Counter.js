import { StyleSheet, View, Button, Text } from 'react-native'
import { useState } from 'react'


const Counter = ({handlerAddCartItem}) => {

    const [number, setNumber] = useState(0)
    const [count, setCount] = useState(1)
 
    return (
        <View style={styles.counterContainer}>
            <Button title='+' onPress={()=> setCount(count + 1)}/>
            <Text style={styles.input}>{count}</Text>
            <Button title='-'  onPress={ ()=> setCount(count - 1) }/>          
            <Button title='carrito' onPress={()=> handlerAddCartItem(count)} />
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
            width:50,
        }



})