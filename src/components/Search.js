import { StyleSheet, Text, TextInput, View, Pressable, Keyboard} from 'react-native'
import colors from '../utility/globals/colors'
import {Feather} from "@expo/vector-icons"
import {AntDesign} from "@expo/vector-icons"
import { useState } from 'react'

const Search = ({handlerKeyword}) => {
    const [input, setInput] = useState("")

    const handlerInput = (t) => setInput(t)

    const search = () => {
        const expression = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
        if (expression.test(input)){
            setError("Cararcteres invalidos")
            return
        }
        setError("")
        handlerKeyword(input)
        Keyboard.dismiss()
    }

    const resetSearch = () => {
        handlerKeyword("")
        handlerInput("")
    }


    return (
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
    }
})