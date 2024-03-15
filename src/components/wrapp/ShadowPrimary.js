import { StyleSheet, View } from 'react-native'


const ShadowPrimary = ({style, children}) => {
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