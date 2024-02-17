import { useEffect,useState } from "react";
import Device from "../devices/devices";
import { View,Modal,Text,TouchableOpacity, TextInput } from "react-native";
import { styles } from "../Styling/styles";
import PrimaryButtonG from "../components/PrimaryButton";


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
  const deviceObject = new Device

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

  useEffect(()=>{
    deviceObject.setDevice(props.device)
    deviceObject.setUrl(props.url)
  },[])
    return (
        <Modal visible={props.modalVisible} animationType="slide">
        <View
          style={{
            paddingTop: 50,
            flex: 1,
            backgroundColor: props.Background,
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
          <View style={styles.mainContainer}>
            <TouchableOpacity
              onPress={() => {
               powerButtonHandler()
               deviceObject.toggle()
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
                    height: 30,
                    backgroundColor: props.font,
                    borderRadius: 4,
                    marginLeft: 50,
                    marginBottom: 30,
                    zIndex: 4,
                  }}
                  onPress={()=>{
                    deviceObject.flash(3)
                    Decrement()
                    deviceObject.deviceToggleValue(value)
                  }}
                ></TouchableOpacity>
                <View
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
                ><Text>{value}</Text></View>
                <TouchableOpacity
                  style={{
                    marginRight: 46,
                    width: 60,
                    height: 30,
                    backgroundColor: props.font,
                    borderRadius: 10,
                    marginLeft: 50,
                    marginBottom: 30,
                    zIndex: 4,
                  }}
                  onPress={()=>{
                    Increment()
                    deviceObject.deviceToggleValue(value)
                    deviceObject.deviceToggleValue(value)
                  }}
                >
                {/*An image or icon will be placed here*/}
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
    )
}