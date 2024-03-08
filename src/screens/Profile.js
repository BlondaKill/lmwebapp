import { StyleSheet, View, Image } from 'react-native'
import { useState } from 'react'
import AddButton from '../components/AddButton'

const ImageSelector = () => {

    const [image, setImage] = useState("")

    const pickImage = () => {
        console.log("tomar imagen")
    }
    const confirmImage = () => {
        console.log("guardar imagen")
    }


    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/user.png")}
                style={styles.image}
                resizeMode='cover'
            
            />

            <AddButton title="Tomar foto" onPress={pickImage}/>
            <AddButton title="Confirmar foto" onPress={confirmImage}/>

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