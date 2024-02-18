import React, { Component } from "react";

// importing navigation components
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/homeScreen";
import LandingPage from "../Screens/startingScreen";



function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={LandingPage}
          options={{
            headerTintColor: "#0000ff",
            headerTitleStyle: {
              fontWeight: "bold", // Set the font weight of the header title
              fontSize: 24,
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
