import { StyleSheet, Text, View } from 'react-native'


const ShadowPrimary = ({style, children}) => {
    console.log(children)
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
}

export default ShadowPrimary

const styles = StyleSheet.create({
    container:{
        elevation:20,
    },

})