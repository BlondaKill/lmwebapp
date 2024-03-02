import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import colors from '../utility/globals/colors'
import fonts from '../utility/globals/fonts'


const Login = ({navigation}) => {

        const dispatch = useDispatch()
        const [email,setEmail] = useState("")
        const [password,setPassword] = useState("")
        const [triggerLogin] = useLoginMutation()
    
        const onSubmit = async () => {
            const {data} = await  triggerLogin({email,password})
            dispatch(setUser({email:data.email,idToken:data.idToken}))
        }




   return (
    <View style={styles.main}>
            <View style={styles.container}>
                <InputForm
                    label="Email"
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error=""
                />
                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error=""
                />
                <SubmitButton onPress={onSubmit} title="Iniciar Sesion"/>
                <Text style={styles.sub}>Ya sos Cliente?</Text>
                <Pressable onPress={()=> navigation.navigate("Register")} >
                    <Text style={styles.subLink}>Registrate</Text>
                </Pressable>
            </View>
        </View>
  )
}

export default Login

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      },
      container:{
        width:"90%",
        backgroundColor:colors.primary,
        gap:15,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:20
      },
      title:{
        fontSize:22,
        fontFamily:fonts.CookieRegular
      },
      sub:{
        fontSize:14,
        fontFamily:fonts.CookieRegular
      },
      subLink:{
        fontSize:14,
        fontFamily:fonts.CookieRegular,
        color:"blue"
      }
})