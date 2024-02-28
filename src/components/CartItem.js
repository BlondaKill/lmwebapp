import { Pressable, StyleSheet, Text, View } from 'react-native'
import colors from '../utility/globals/colors'
import fonts from '../utility/globals/fonts'
import { Entypo } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { deleteCartItem, addCartItem } from '../features/cart/cartSlice'
import Counter from './Counter'



const CartItem = ({item}) => {
    const dispatch = useDispatch()
    const handlerAddCartItem = (quantity) => {
        dispatch(addCartItem({...item, quantity}))
      }
    return (
        <View style={styles.card}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{item.title}</Text>
                    <Text style={styles.text2}>{item.brand}</Text>
                    <Counter 
                        startingValue={item.quantity} 
                        handlerAddCartItem={handlerAddCartItem}
                        textButton="Agregar"
                        />
                    <Text style={styles.text2}>Precio: $ {item.price}</Text>
                </View>
                <Pressable onPress={() => dispatch(deleteCartItem(item.id))}>
                    <Entypo name="trash" size={30} color="black"/>
                </Pressable>
                
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.primary,
        padding:20,
        margin:10,
        borderWidth:2,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    textContainer:{
        width:"70%"
    },
    text:{
        color:colors.black,
        fontSize:19,
        fontFamily:fonts.RobotoBold
    },
    text2:{
        color:colors.black,
        fontSize:14,
        fontFamily:fonts.RobotoBold
    }


})