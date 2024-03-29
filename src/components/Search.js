import { StyleSheet, Text, TextInput, View, Pressable, Keyboard } from 'react-native'
import colors from '../utility/globals/colors'
import { Feather } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { useState } from 'react'

const Search = ({handlerKeyWord}) => {
    const [input, setInput] = useState("")
    const [error, setError] = useState("")
    const handlerInput = (t) => setInput(t)

    const search = () => {
        const expression = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
        if (expression.test(input)){
            setError("Cararcteres invalidos")
            return
        }
        setError("")
        handlerKeyWord(input)
        Keyboard.dismiss()
    }

    const resetSearch = () => {
        handlerKeyWord("")
        handlerInput("")
        setError("")
    }


    return (
        <View>     
            <View style={styles.container}>
                <TextInput
                    placeholder='Buscar'
                    value= {input}
                    onChangeText={handlerInput}
                    style={styles.input}
            />
            <Pressable onPress={search}>
                <Feather name='search' size={30} color="black"/>
            </Pressable>
            <Pressable onPress={resetSearch}>
                <AntDesign name='closecircle' size={30} color="black"/>
            </Pressable>
            </View>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.primary,
        flexDirection: "row",
        padding:10,

    },
    input:{
        flex:1,
        paddingHorizontal:10,
        paddingVertical:5,
        borderWidth:2,
        borderRadius:5,
        alignItems:"center"
    },
    errorText:{
        color:"red",
        paddingHorizontal:10
    }
})