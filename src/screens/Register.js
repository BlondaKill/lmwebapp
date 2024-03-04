import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import colors from '../utility/globals/colors'
import fonts from '../utility/globals/fonts'
import { useRegisterMutation } from '../app/services/auth'
import { setUser } from '../features/auth/authSlice'



const Register = ({navigation}) => {

        
        const dispatch = useDispatch()
        const [email,setEmail] = useState("")
        const [password,setPassword] = useState("")
        const [ confirmPassword, setConfirmPassword ] = useState("")
        const [triggerRegister] = useRegisterMutation()
        
    
        const onSubmit = async () => {
            const {data} = await  triggerLogin({email,password})
            dispatch(setUser({email:data.email, idToken: data.idToken}))
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
                <InputForm
                    label="Confirmar Password"
                    value={confirmPassword}
                    onChangeText={(t) => setConfirmPassword(t)}
                    isSecure={true}
                    error=""
                />
                <SubmitButton onPress={onSubmit} title="Registrarme"/>
                <Text style={styles.sub}>Ya sos Cliente?</Text>
                <Pressable onPress={()=> navigation.navigate("Login")} >
                    <Text style={styles.subLink}>Iniciar Sesion</Text>
                </Pressable>
            </View>
        </View>
  )
}

export default Register

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
        fontSize:30,
        fontFamily:fonts.CookieRegular
      },
      subLink:{
        fontSize:25,
        fontFamily:fonts.CookieRegular,
        color:"blue"
      }
})