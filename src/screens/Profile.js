import { StyleSheet, Text, View,Image } from 'react-native'
import AddButton from '../components/AddButton'


const Profile = ({navigation}) => {
    
  return (
    <View style={styles.container}>
        <Image
            source={data ? {uri:data.image}:require("../../assets/user.png")}
            style={styles.image}
            resizeMode='cover'
        />
        <AddButton title={"Agregar Imagen de perfil"} onPress={()=> navigation.navigate("ImageSelector")}/>
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
    }
})