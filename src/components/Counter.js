import { StyleSheet, View, Button, Text } from 'react-native'
import { useState } from 'react'
import { useDispatch } from 'react-redux'



const Counter = ({startingValue, textButton, product}) => {

    
    const [count, setCount] = useState(startingValue)
    const dispatch = useDispatch()

    const handlerAddCartItem = (quantity) => {
        dispatch(addCartItem({...product, quantity}))
        setCount(1)
        }
    


    return (
        <View style={styles.counterContainer}>
            <Button title='+' onPress={()=> setCount(count + 1)}/>
            <Text style={styles.text}>{count}</Text>
            <Button title='-'  onPress={ ()=> setCount(count - 1) }/>          
            <Button title={textButton} onPress={()=>handlerAddCartItem(count)} />
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
        text:{
            textAlign: "center",
            width:50,
        }



})