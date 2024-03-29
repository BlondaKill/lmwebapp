import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import colors from '../utility/globals/colors'
import fonts from '../utility/globals/fonts'
import { useLoginMutation } from '../app/services/auth'
import { setUser } from '../features/auth/authSlice'
import { loginSchema } from '../utility/validations/authSchema'
import { deleteSession } from '../utility/db'
import { insertSession } from '../utility/db'
import ModalMessage from '../components/ModalMessage'

const Login = ({navigation}) => {

        const dispatch = useDispatch()
        const [email,setEmail] = useState("")
        const [password,setPassword] = useState("")
        const [errorEmail,setErrorEmail] = useState("")
        const [errorPassword,setErrorPassword] = useState("")
        const [triggerLogin] = useLoginMutation()
        const [modalVisible, setModalVisible] = useState(false)

        
        const handlerCloseModal = () => {
            setModalVisible(false)
        }
        const onSubmit = async () => {
          try {
            loginSchema.validateSync({email,password})
            const {data, error} = await  triggerLogin({email,password})
            

            if(error){
              setModalVisible(true)
            }         
            deleteSession()
            insertSession(data)
            dispatch(setUser({email:data.email,idToken:data.idToken,localId:data.localId}))
    
          } catch (error) {
    
            setErrorEmail("")
            setErrorPassword("")
    
            switch(error.path){
              case "email":
                setErrorEmail(error.message)
                break
              case "password":
                setErrorPassword(error.message)
                break
              default:
                break
            }
    
          }
        }




   return (
    <>
    <View style={styles.main}>
            <View style={styles.container}>
                <InputForm
                    label="Email"
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error={errorEmail}
                />
                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error={errorPassword}
                />
                <SubmitButton onPress={onSubmit} title="Iniciar Sesion"/>
                <Text style={styles.sub}>No sos Cliente?</Text>
                <Pressable onPress={()=> navigation.navigate("Register")} >
                    <Text style={styles.subLink}>Registrate</Text>
                </Pressable>
            </View>
        </View>
        <ModalMessage textButton="Intenta nuevamente"
            text="Email o Password no valida"
            modalVisible={modalVisible}
            onclose={handlerCloseModal}
        
        
        />

        </>
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
        fontSize:30,
        fontFamily:fonts.CookieRegular
      },
      subLink:{
        fontSize:25,
        fontFamily:fonts.CookieRegular,
        color:"red"
      }
})