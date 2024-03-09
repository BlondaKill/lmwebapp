import { StyleSheet, Text, View } from 'react-native'
import { useState,useEffect } from 'react'
import MapPreview from '../components/MapPreview '
import AddButton from '../components/AddButton'
import * as Location from "expo-location"


const LocationSelector = ({navigation}) => {

  const [location,setLocation] = useState({latitude:"",longitude:""})
  const [errorMessage, setErrorMessage] = useState(null)
  const [address,setAddress] = useState("")

  useEffect(()=>{

    (async ()=>{
        let {status} = await Location.requestForegroundPermissionsAsync()
        if(status !== "granted"){
            setErrorMessage("Permisos denegados")
            return
        }
        let location = await Location.getCurrentPositionAsync()
        setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        })
    })()

  },[])

  const onConfirmAddress = () => {
    navigation.goBack()
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Piedras 1497</Text>
      <MapPreview latitude={location.latitude} longitude={location.longitude}/>
      <AddButton title="Confirmar Localizacion"  onPress={onConfirmAddress} />
    </View>
  )
}

export default LocationSelector

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        marginTop:40,
        gap:20
    },
    text:{
        fontSize:16
    }
})
