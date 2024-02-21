import { useEffect, useState } from "react";
import Device from "../devices/devices";
import { View, Modal, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "../Styling/styles";
import PrimaryButtonG from "../components/PrimaryButton";
import { AntDesign } from "@expo/vector-icons";

/*
Props to be recieved
Background - Background Color
modalExtraControl - Additional Control Handler for Devices
font - font Color
modalTitle - Title of the modal
devie - Device
modalVisibilityHanlder - Modal Visibility
modalVisible - Property for modal visibility
*/

export default function DeviceControlModal(props) {
  //State for the value of the device
  const [value, setValue] = useState(0);

  //State for power button
  const [powerButton, setPowerButton] = useState("ON");
  const [powerButtonColor, setPowerButtonColor] = useState("green");

  //Instance of device Classes
  const deviceObject = new Device();

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

  useEffect(() => {
    console.log(props.device)
    deviceObject.setDevice(props.device);
    deviceObject.setUrl(props.url);
  },[]);

  return (
    <Modal visible={props.modalVisible} animationType="slide">
      <View
        style={{
          paddingTop: 50,
          flex: 1,
          backgroundColor: props.Background,
        }}
      >
      <View style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
      }}>
        <Text
          style={{
            color: props.font,
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 40,
            marginLeft: 20,
          }}
        >
          {props.modalTitle}
        </Text>
        <TextInput
        style={{ 
          borderWidth: 1,
          width: 200,
          height: 50,
          paddingHorizontal: 10,
        }}
        placeholder="Enter IP Address"
        onChangeText={(text) => {deviceObject.setUrl(text);}}
         />
        </View>
        <View style={styles.mainContainer}>
          <TouchableOpacity
            onPress={() => {
              deviceObject.setDevice(props.device);
              deviceObject.setUrl(props.url);
              powerButtonHandler();
              deviceObject.deviceToggle();
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
                color: props.font,
                marginTop: 60,
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 20,
                marginBottom: 30,
              }}
            >
              {props.modalExtraControl}
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
                  height: 60,
                  marginRight: 10,
                  zIndex: 4,
                  marginBottom: 15,
                }}
                onPress={() => {
                  deviceObject.setDevice(props.device);
                  deviceObject.setUrl(props.url);
                  Decrement();
                  deviceObject.deviceToggleValue(value);
                }}
              >
                <AntDesign name="minuscircleo" size={50} color={props.font} />
              </TouchableOpacity>
              <View
                style={{
                  width: 100,
                  height: 50,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",

                  borderBottomWidth: 2,
                  borderRadius: 5,
                  marginHorizontal: 20,
                  marginBottom: 10,
                  borderColor: props.font,
                  zIndex: 4,
                }}
              >
                <Text
                  style={{
                    color: props.font,
                    fontSize: 18
                  }}
                >
                  {value}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: 60,
                  height: 60,
                  marginLeft: 15,
                  zIndex: 4,
                  marginBottom: 15,
                }}
                onPress={() => {
                  console.log("Increment");
                  deviceObject.setDevice(props.device);
                  deviceObject.setUrl(props.url);
                  Increment();
                  deviceObject.deviceToggleValue(value);
                }}
              >
                {/*An image or icon will be placed here*/}
                <AntDesign name="pluscircleo" size={50} color={props.font} />
              </TouchableOpacity>
            </View>
          </View>
          {props.device === "Bulb" ? (
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
            pressHandler={props.modalVisibilityHandler}
          />
        </View>
      </View>
    </Modal>
  );
}
