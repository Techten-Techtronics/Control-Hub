import React, { useRef, useEffect } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
// smart home svg
import SmartH from "../assets/SmartH.png";
//hand wave
import HandWave from "../assets/wave.png";
//logo
import Logo from "../assets/R.png";

function LandingPage({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={SmartH}
            style={{ width: 350, height: 350, paddingBottom: 20 }}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonCont}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.text}>Get Started</Text>
          <Image
            source={HandWave}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
        <View
          style={{
            botton: 1,
          }}
        >
          <Text>v2.0</Text>
        </View>
      </View>
      <View style={styles.logobox}>
        <Image source={Logo} style={{ height: 90, width: 90, marginBottom: 20 }} />
      </View>
    </>
  );
}

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "white",
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    paddingTop: 50,
    flex: 1,
    justifyContent: "center",
  },
  buttonCont: {
    marginTop: 320,
    bottom: 0,
    backgroundColor: "white",
    borderRadius: 19,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
    borderWidth: 2,
    borderColor: "blue",
    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: "blue",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  logo: {
    logo: {
      width: 110,
      height: 90,
    },
  },
  logobox: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white'
  },
});
