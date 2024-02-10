import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import {Feather} from "@expo/vector-icons"

const Search = () => {
    return (
        <View>
            <TextInput
            placeholder='Buscar'
            style={styles.input}
        />
        <Pressable>

        </Pressable>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    input:{
        paddingHorizontal:10,
        paddingVertical:5,
        borderWidth:2,
        borderRadius:5
    }
})