import { useEffect, useState } from "react";
import Device from "../devices/devices";
import {
  View,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
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

  //State for device
  const [device, setDevice] = useState("");

  //Function to handle the power button
  const powerButtonHandler = () => {
    if (powerButton === "ON") {
      setPowerButton("OFF");
      setValue(0);
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
    console.log(props.device);
    deviceObject.setDevice(props.device);
    deviceObject.setUrl(props.url);
    setDevice(props.device);
  }, []);

  return (
    <Modal visible={props.modalVisible} animationType="slide">
      <View
        style={{
          paddingTop: 50,
          flex: 1,
          backgroundColor: props.Background,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
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
            onChangeText={(text) => {
              deviceObject.setUrl(text);
            }}
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
                    fontSize: 18,
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
          

          {device === "Bulb" ? (
            <>
              <TextInput />
            </>
          ) : device === "Fan" ? (
            <>
              <View style={style.deviceControlView}>
                <PrimaryButtonG
                  pressHandler={() => {
                    setValue(1)
                    deviceObject.setDevice(props.device);
                    deviceObject.setUrl(props.url);
                    deviceObject.deviceToggleValue(1);
                  }}
                  title={"1"}
                  height={50}
                  width={50}
                />
                <PrimaryButtonG
                  pressHandler={() => {
                    setValue(2)
                    deviceObject.setDevice(props.device);
                    deviceObject.setUrl(props.url);
                    deviceObject.deviceToggleValue(2);
                  }}
                  title={"2"}
                  height={50}
                  width={50}
                />
                <PrimaryButtonG
                  pressHandler={() => {
                    setValue(3)
                    deviceObject.setDevice(props.device);
                    deviceObject.setUrl(props.url);
                    deviceObject.deviceToggleValue(3);
                  }}
                  title={"3"}
                  height={50}
                  width={50}
                />
                <PrimaryButtonG
                  pressHandler={() => {
                    setValue(4)
                    deviceObject.setDevice(props.device);
                    deviceObject.setUrl(props.url);
                    deviceObject.deviceToggleValue(4);
                  }}
                  title={"4"}
                  height={50}
                  width={50}
                />
                <PrimaryButtonG
                  pressHandler={() => {
                    setValue(5)
                    deviceObject.setDevice(props.device);
                    deviceObject.setUrl(props.url);
                    deviceObject.deviceToggleValue(5);
                  }}
                  title={"5"}
                  height={50}
                  width={50}
                />
              </View>
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

const style = StyleSheet.create({
  deviceControlView: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
});
