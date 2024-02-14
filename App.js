import {
  Text,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./Styling/styles";
import Bulb from "./devices/bulb";
import Fan from "./devices/fan";
import PrimaryButtonG from "./components/PrimaryButton";
import IP from "./ip/IP";

export default function App() {
  //Creating state for dark mode styling and modal visibility
  const [font, setFont] = useState("black");
  const [Background, setBackground] = useState("white");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalBackground, setModalBackground] = useState("white");
  const [ipmodalVisible, setIpModalVisible] = useState(false);
  const [validation, setValidation] = useState("");

  //State and Class instance for IP address of the backend server
  const [ip, setIp] = useState("");
  const ipInstance = new IP();

  //State for the modal
  const [modaltitle, setModalTitle] = useState("");
  const [modalExtraControls, setModalExtraControls] = useState("");

  //State for power button
  const [powerButton, setPowerButton] = useState("ON");
  const [powerButtonColor, setPowerButtonColor] = useState("green");

  //Instance of various device Classes
  const bulb = new Bulb();
  const fan = new Fan();

  //Function to handle the power button
  const powerButtonHandler = () => {
    if (powerButton === "ON") {
      setPowerButton("OFF");
      setPowerButtonColor("red");
    } else {
      setPowerButton("ON");
      setPowerButtonColor("green");
    }
  };

  //Function to change the background color
  const changeBackground = () => {
    if (Background === "white" && font === "black") {
      setBackground("black");
      setFont("white");
    } else {
      setBackground("white");
      setFont("black");
    }
  };

  //Function to open the modal for controlling the devices
  function OpenModal(deviceName) {
    setModalVisible(true);
    setModalTitle(deviceName);
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Background,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.title}>
        <Text
          style={{
            color: font,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Control hub
        </Text>
        <PrimaryButtonG
          width={120}
          height={50}
          title={"Dark Mode"}
          pressHandler={changeBackground}
        />
      </View>
      <View style={styles.cardContainer}>
        <>
          <Modal visible={modalVisible} animationType="slide">
            <View
              style={{
                paddingTop: 50,
                flex: 1,
                backgroundColor: Background,
              }}
            >
              <Text
                style={{
                  color: font,
                  fontSize: 30,
                  fontWeight: "bold",
                  marginTop: 40,
                  marginLeft: 20,
                }}
              >
                {modaltitle}
              </Text>
              <View style={styles.mainContainer}>
                <TouchableOpacity
                  onPress={() => {
                    powerButtonHandler();
                    if (modaltitle === "Bulb") {
                      bulb.toggle();
                    } else {
                      fan.toggle();
                    }
                  }}
                  style={{
                    backgroundColor: powerButtonColor,
                    width: 120,
                    height: 120,
                    borderRadius: 60,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.powerButtonText}>{powerButton}</Text>
                </TouchableOpacity>

                <View>
                  <Text
                    style={{
                      color: font,
                      marginTop: 60,
                      fontSize: 20,
                      fontWeight: "bold",
                      marginLeft: 20,
                      marginBottom: 30,
                    }}
                  >
                    {modalExtraControls}
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        width: 60,
                        height: 30,
                        backgroundColor: font,
                        borderRadius: 4,
                        marginLeft: 50,
                        marginBottom: 30,
                        zIndex: 4,
                      }}
                    ></TouchableOpacity>
                    <TextInput
                      style={{
                        width: 70,
                        padding: 10,
                        height: 50,
                        borderWidth: 2,
                        backgroundColor: "white",
                        borderRadius: 2,
                        marginLeft: 50,
                        marginBottom: 30,
                        zIndex: 4,
                      }}
                    />
                    <TouchableOpacity
                      style={{
                        marginRight: 46,
                        width: 60,
                        height: 30,
                        backgroundColor: font,
                        borderRadius: 10,
                        marginLeft: 50,
                        marginBottom: 30,
                        zIndex: 4,
                      }}
                    ></TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        position: "absolute",
                        right: 60,
                        top: -5,
                        width: 30,
                        height: 60,
                        backgroundColor: font,
                        borderRadius: 4,
                        marginLeft: 50,
                        marginBottom: 30,
                        zIndex: 3,
                      }}
                    ></TouchableOpacity>
                  </View>
                </View>
                {modaltitle === "Bulb" ? (
                  <>
                    <TextInput />
                  </>
                ) : (
                  <></>
                )}
                <PrimaryButtonG

                  width={170}
                  height={50}
                  title={"Back to devices"}
                  pressHandler={() => setModalVisible(false)}
                />
              </View>
            </View>
          </Modal>
        </>
        <TouchableOpacity
          onPress={() => {
            OpenModal("Bulb");
            setModalExtraControls("Brightness");
          }}
          style={styles.card}
          activeOpacity={0.6}
        >
          <Text style={styles.cardText}>Bulb</Text>
          <View style={styles.card1Shape1}></View>
          <View style={styles.card1Shape2}></View>
          <View style={styles.card1Shape3}></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            OpenModal("Fan");
            setModalExtraControls("Speed");
          }}
          style={styles.card}
        >
          <Text style={styles.card2Shape1}>Fan</Text>
          <View style={styles.card2Shape2}></View>
          <View style={styles.card2Shape3}></View>
          <View style={styles.card2Shape4}></View>
          <View style={styles.card2Shape5}></View>
          <View style={styles.card2Shape6}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.card3Text}>Thermometer</Text>
          <View style={styles.card3Shape1}></View>
          <View style={styles.card3Shape2}></View>
          <View style={styles.card3Shape3}></View>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="slide"
          visible={ipmodalVisible}
        >
          <KeyboardAvoidingView
            style={{
              borderTopWidth: 1,
              borderColor: font,
              borderTopEndRadius: 10,
              borderTopStartRadius: 10,
              marginTop: 100,
              height: 600,
              backgroundColor: Background,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: font,
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 40,
                marginLeft: 20,
              }}
            >
              Enter Ip address
            </Text>
            {validation === "false" ? (
              <Text style={{ color: "red" }}>Invalid IP</Text>
            ) : validation === "true" ? (
              <Text style={{ color: "green" }}>Connection established</Text>
            ) : (
              <></>
            )}
            <TextInput
              style={{
                color:Background,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                width: 200,
                height: 50,
                backgroundColor: font,
                borderRadius: 10,
                marginTop: 70,
                marginBottom: 50,
                padding: 10,
              }}
              onChangeText={(text) => {
                setIp(text);
                ipInstance.CheckIP(ip);
                
                if (ipInstance.ip !==""&& ipInstance.status =="connected") {
                  setValidation("true");
                  setTimeout(() => setIpModalVisible(false), 3000);
                } else if( ipInstance.status ==="no connection") {
                  setValidation("false");
                }
                else{}
              }}
            />
            <PrimaryButtonG
              style={{
                marginTop: 50,
              }}
              width={120}
              height={50}
              title={"Cancel"}
              pressHandler={() => {
                setValidation("");
                setIpModalVisible(false)
                }}
            />
          </KeyboardAvoidingView>
        </Modal>
        <PrimaryButtonG
          width={120}
          height={50}
          title={"Set IP"}
          pressHandler={() => setIpModalVisible(true)}
        />
      </View>
    </View>
  );
}
