import {
  Text,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import PrimaryButtonG from "../components/PrimaryButton";
import DeviceControlModal from "./deviceControlModal";
import { styles } from "../Styling/styles";
import { UrlContext } from "../store/url";
import Fan from "../assets/fan.png";
import Bulb from "../assets/idea.png";
import Thermo from "../assets/thermo.png";

export default function Home() {
  //Creating state for dark mode styling and modal visibility
  const [font, setFont] = useState("black");
  const [Background, setBackground] = useState("white");
  const [modalVisible, setModalVisible] = useState(false);

  //Url context
  const context = useContext(UrlContext);

  //State for the response message of the server
  const [message, setMessage] = useState("");

  //State for the modal
  const [modaltitle, setModalTitle] = useState("");
  const [modalExtraControls, setModalExtraControls] = useState("");

  //Device state
  const [device, setDevice] = useState("");

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
  function OpenModal() {
    console.log(device);
    if (modalVisible !== true) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  }

  //Check whether the server is online
  const CheckIP = async () => {
    /*
       Checking whether flask server is online 
       If flask server is online set the status to true
  
      */
     console.log(context.url);
    fetch(`http://${context.url}:4000/`)
      .then((response) => {
        response.json();
      })
      .then(() => {
        setMessage("connected");
      })
      .catch((error) => {
        setMessage("error");
        console.error(error.message);
      });
  };

  //Constantly check whether server is online
  useEffect(() => {
    var interval =   setInterval(() => {
      CheckIP();
    }, 3000);
    setTimeout(()=>{clearInterval(interval)},12000)
  
  }, []);

  return (
    <>
      {Background == "white" ? (
        <StatusBar style="dark"></StatusBar>
      ) : (
        <StatusBar style="light"></StatusBar>
      )}
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
          Smart Home
          </Text>
          <PrimaryButtonG
            width={120}
            height={50}
            title={"Dark Mode"}
            pressHandler={changeBackground}
          />
        </View>
        <View style={styles.cardContainer}>
          {/* Modal for controlling the devices */}
          <DeviceControlModal
            Background={Background}
            modalExtraControl={modalExtraControls}
            font={font}
            url={context.url}
            modalVisible={modalVisible}
            modalTitle={device}
            device={device}
            modalVisibilityHandler={OpenModal}
          />

          {/*Card 1 */}
          <TouchableOpacity
            onPress={() => {
              setDevice("Led");
              OpenModal();
              setModalExtraControls("Brightness");
            }}
            style={styles.card}
            activeOpacity={0.6}
          >
            <Text style={styles.cardText}>Led</Text>
            <Image
              source={Bulb}
              style={{
                height: 100,
                width: 100,
              }}
            />
          </TouchableOpacity>
          {/*Card 2 */}
          <TouchableOpacity
            onPress={() => {
              OpenModal();
              setModalExtraControls("Speed");
              setDevice("Fan");
            }}
            style={styles.card}
          >
            <Text style={styles.card2Shape1}>Fan</Text>
            <Image
              source={Fan}
              style={{
                height: 100,
                width: 100,
              }}
            />
          </TouchableOpacity>
          {/*Card 3 */}
          <TouchableOpacity style={styles.card}>
            <Text style={styles.card3Text}>Smart Pump</Text>
            <Image
              source={Thermo}
              style={{
                height: 100,
                width: 100,
              }}
            />
          </TouchableOpacity>
          {/*Server Connection*/}
          <>
            {message === "connected" ? (
              <Text style={{ color: "green" }}>Connection established</Text>
            ) : message === "error" ? (
              <Text style={{ color: "red" }}>IConnection Failed</Text>
            ) : (
              <></>
            )}
          </>
        </View>
      </View>
    </>
  );
}

/*
  Ip Validation modal
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
                  CheckIP();
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
                 <PrimaryButtonG
                style={{
                  marginTop: 50,
                }}
                width={120}
                height={50}
                title={"Check Server Status"}
                pressHandler={() => {
                 CheckIP();
                }}
              />
              
            </KeyboardAvoidingView>
          </Modal> */
