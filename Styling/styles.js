
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
      display: "flex",
      flexDirection: "row",
      gap: 40,
      justifyContent: "space-between",
    },
    cardContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
      gap: 20,
    },
    card: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 20,
      fontWeight: "bold",
      backgroundColor: "#0066FF",
      width: 310,
      height: 160,
      borderRadius: 40,
      zIndex: 1,
      gap: 44,
    },
    cardText: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 30,
    },
    mainContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
    },
    powerButtonText: {
      color: "white",
      fontSize: 28,
      fontWeight: "bold",
    },
   card1Shape1: {
    width: 70,
    height: 70,
    backgroundColor: "yellow",
    borderRadius: 50,
    marginLeft: 50,
    marginBottom: 30,
    zIndex: 4,
  },
  card1Shape2:{
    width: 26,
    height: 40,
    position: "absolute",
    backgroundColor: "#A52A2A",
    position: "absolute",
    top: 80,
    right: 76,
    zIndex: 3,
  },
  card1Shape3:{
    width: 15,
    height: 15,
    backgroundColor: "#aaa",
    position: "absolute",
    top: 113,
    right: 82,
    zIndex: 2,
    borderRadius: 50,
  },
  card2Shape1: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
    marginRight: 187,
  },
  card2Shape2:{
    position: "absolute",
    width: 40,
    right: 110,
    height: 20,
    backgroundColor: "white",
    borderRadius: 20,
  },
  card2Shape3:{
    position: "absolute",
    width: 20,
    right: 80,
    top: 20,
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
  },
  card2Shape4:{
    position: "absolute",
    width: 20,
    top: 100,
    right: 80,
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
  },
  card2Shape5:{
    position: "absolute",
    right: 38,
    width: 40,
    height: 20,
    backgroundColor: "white",
    borderRadius: 20,
  },
  card2Shape6:{
    position: "absolute",
    width: 50,
    right: 70,
    height: 47,
    backgroundColor: "black",
    borderRadius: 50,
  },
  card3Text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
    marginRight: 110,
  },
  card3Shape1: {
    position: "absolute",
    width: 20,
    height: 80,
    backgroundColor: "white",
    borderRadius: 50,
    top: 20,
    right: 80,
  },
  card3Shape2:{
    position: "absolute",
    width: 20,
    height: 40,
    backgroundColor: "#A52A2A",
    borderRadius: 10,
    top: 60,
    right: 80,
  }
  ,
  card3Shape3:{
    position: "absolute",
    width: 30,
    backgroundColor: "#A52A2A",
    height: 30,
    borderRadius: 50,
    top: 80,
    right: 76,
  }
  });
  