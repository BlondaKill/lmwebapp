import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import CartItem from '../components/CartItem'
import fonts from '../utility/globals/fonts'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../app/services/orders'



const Cart = () => {

    const cart = useSelector((state)=> state.cart)
    const localId = useSelector((state)=> state.auth.localId)
    const [triggerAddOrder] = usePostOrderMutation()

    const handlerAddOrder = () => {
        const createdAt = new Date().toLocaleString()
        const order = {
            createdAt,
            ...cart
        }
        triggerAddOrder({localId, order})
    }

    
    return (
    <View style={styles.container}>
        
        <FlatList
        data={cart.items}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> <CartItem item={item}/>}
        />
        <View style={styles.confirmContainer}>
            <Pressable onPress={handlerAddOrder}>
                <Text style={styles.confirmText}>Confirmar</Text>
            </Pressable>
            <Text style={styles.confirmText}>Total: $ {cart.total}</Text>
        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between",
        marginBottom:130
    },
    confirmContainer:{
        flexDirection:"row",
        backgroundColor:"pink",
        padding:25,
        justifyContent:"space-between",
    },
    confirmText:{
        fontFamily:fonts.OleoScriptRegular,
        fontSize:23,
        color:"black"
    }
})



