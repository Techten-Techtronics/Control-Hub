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
import Device from "./devices/devices";
import PrimaryButtonG from "./components/PrimaryButton";
import IP from "./ip/IP";
import axios from "axios";

export default function App() {
  //Creating state for dark mode styling and modal visibility
  const [font, setFont] = useState("black");
  const [Background, setBackground] = useState("white");
  const [modalVisible, setModalVisible] = useState(false);
  const [ipmodalVisible, setIpModalVisible] = useState(false);
  const [validation, setValidation] = useState("");


  //State for the value of the device
  const [value, setValue] = useState(0);

  //State and Class instance for IP address of the backend server
  const [ip, setIp] = useState("");
  const ipInstance = new IP();

  //State for the response message of the server
  const [message, setMessage] = useState("");

  //State for the modal
  const [modaltitle, setModalTitle] = useState("");
  const [modalExtraControls, setModalExtraControls] = useState("");

  //State for power button
  const [powerButton, setPowerButton] = useState("ON");
  const [powerButtonColor, setPowerButtonColor] = useState("green");

  //Instance of various device Classes
  const device = new Device();
  
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

  //Check whether the server is online
  const  CheckIP = async () => {
    /*
     Checking whether flask server is online 
     If flask server is online set the status to true
    */
   try {
    const  response = await axios.get(`http://${ip}:5000/main`)
    setMessage(response.data)
   } catch (error) {
      console.log(error.message)
      setMessage("error")
   }
}

  //Functions for Device speed or power value change
  function Decrement() {
    if (value - 1 < 0) {
      setValue(0);
    } else {
      setValue(value - 1);
    }
  }

  const Increment = () => {
    if (value + 1 > 5) {
      setValue(5);
    } else {
      setValue(value + 1);
    }
  };

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
          {/* Modal for controlling the devices */}
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
                   device.toggle()
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
                      onPress={()=>{
                        device.flash(3)
                        Decrement()
                        device.deviceToggleValue(value)
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
                      placeholder={`${value}`}
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
                      onPress={()=>{
                        Increment()
                        device.deviceToggleValue(value)
                        device.deviceToggleValue(value)
                      }}
                    ></TouchableOpacity>
                  </View>
                </View>
                {device === "Bulb" ? (
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
        <Text>Ip:{ip}</Text>
        {/*Card 1 */}
        <TouchableOpacity
          onPress={() => {
            OpenModal("Bulb");
            device.setDevice("bulb");
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
        {/*Card 2 */}
        <TouchableOpacity
          onPress={() => {
            OpenModal("Fan");
            setModalExtraControls("Speed");
            device.setDevice("fan");
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
        {/*Card 3 */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.card3Text}>Thermometer</Text>
          <View style={styles.card3Shape1}></View>
          <View style={styles.card3Shape2}></View>
          <View style={styles.card3Shape3}></View>
        </TouchableOpacity>
        {/*Ip Validation Modal*/}
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
              marginTop: 10,
              height: 800,
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
            {message === "connected" ? (
              <Text style={{ color: "green" }}>Connection established</Text>
            ) : message === "error" ? (
              <Text style={{ color: "red" }}>Invalid IP</Text>
            ) : (
              <></>
            )}
            <TextInput
              style={{
                color: Background,
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
                device.setIP(text);
                setIp(text);
                CheckIP()
                if ( message == "connected" ) {
                  setTimeout(() => setIpModalVisible(false), 3000);
                }
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
                setIpModalVisible(false);
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
