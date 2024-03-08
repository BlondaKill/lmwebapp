import { StyleSheet, Text, View } from 'react-native'
import { useState,useEffect } from 'react'
import MapPreview from '../components/MapPreview '
import AddButton from '../components/AddButton'



const LocationSelector = ({navigation}) => {

  const [location,setLocation] = useState({latitude:"",longitude:""})
  const [errorMsg, setErrorMsg] = useState(null)
  const [address,setAddress] = useState("")

  const onConfirmAddress = () => {
    navigation.goBack()
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Piedras 1497</Text>
      <MapPreview latitude="-34.626213" longitude="-58.37641"/>
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
