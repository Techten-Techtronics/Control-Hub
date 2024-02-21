import React from "react";

// importing navigation packages
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/homeScreen";
import LandingPage from "../Screens/startingScreen";

function Route() {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
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
        <Stack.Screen
          name="Home"
          component={Home}
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
