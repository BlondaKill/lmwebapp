import { StyleSheet, Text, View,TextInput } from 'react-native'
import fonts from '../utility/globals/fonts'
import colors from '../utility/globals/colors'



const InputForm = ({label,value, onChangeText}) => {


  return (
    <View style={styles.inputContainer}>
        <Text style={styles.titleInput}>{label}</Text>
        <TextInput  
            value={value}  
            onChangeText={onChangeText} 
            style={styles.input}
            
        />
        
    </View>
  )
}


export default InputForm


const styles = StyleSheet.create({
    inputContainer:{
        width:"100%"
    },
    input:{
        width:"90%",
        borderWidth:0,
        borderBottomWidth:3,
        borderBottomColor: colors.white,
        padding:2,
        fontFamily:fonts.CookieRegular,
        fontSize:14,
        marginHorizontal:"5%",
        marginVertical:10
    },
    titleInput:{
        width:"90%",
        marginHorizontal:"5%",
        fontSize:28,
        fontFamily:fonts.CookieRegular
    },
    error:{
        fontSize:16,
        color:"red",
        fontFamily:fonts.CookieRegular,
        fontStyle:"italic",
        marginLeft:20
    }
})