import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PrimaryButtonG = (props) => {
  return (
    <TouchableOpacity style = {{
        width: props.width,
        height: props.height,
        backgroundColor: "#0066FF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    }}
    onPress={props.pressHandler}
    >
      <Text style={{
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
      
      }}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButtonG

const styles = StyleSheet.create({})