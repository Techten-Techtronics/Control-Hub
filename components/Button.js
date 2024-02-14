import { Pressable, StyleSheet, Text,TouchableOpacity } from 'react-native'


const PrimaryButton = (color="0066FF",width=160,pressHandler,title) => {
  return (
  
   <Pressable style={{
    backgroundColor: color,
    width: width,
    justifyContent: "center",
    alignItems: "center",   
    height: 50,
    borderRadius: 40,
   }} onPress={pressHandler}>

      <Text >"Hello World"</Text>
   
    </Pressable>
  
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
   
})