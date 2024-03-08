import { StyleSheet, Text, View,Image } from 'react-native'
import AddButton from '../components/AddButton'
import { useSelector } from 'react-redux'
import { useGetCategoriesQuery } from '../app/services/shop'



const Profile = ({navigation}) => {
    const localId = useSelector((state)=> state.auth.localId)
    const {data} = useGetCategoriesQuery(localId)

  return (
    <View style={styles.container}>
        <Image
            source={data ? {uri:data.image}:require("../../assets/user.png")}
            style={styles.image}
            resizeMode='cover'
        />
        <Text style={styles.text}>Piedras 1497</Text>
        <AddButton title={"Agregar Imagen de perfil"} onPress={()=> navigation.navigate("ImageSelector")}/>
        <AddButton title={"Agregar Direccion"} onPress={()=> navigation.navigate("LocationSelector")}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:20
    },
    image:{
        width:200,
        height:200
    },
    text: {
        fontSize: 20,
        marginVertical: 10
    }
})