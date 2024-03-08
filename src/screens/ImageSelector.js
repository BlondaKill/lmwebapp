import { StyleSheet, View, Image } from 'react-native'
import { useState } from 'react'
import AddButton from '../components/AddButton'
import * as ImagePicker from 'expo-image-picker';

const ImageSelector = () => {

    const [image, setImage] = useState("")

    const pickImage = async() => {
        const {granted} = ImagePicker.requestCameraPermissionsAsync()
        if(granted){
            let result = await ImagePicker.launchCameraAsync({
                allowsEditing:true,
                aspect:[4,3],
                quality:0.3
            })
        }
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

export default ImageSelector

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