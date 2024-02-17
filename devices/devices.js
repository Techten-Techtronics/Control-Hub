import axios from "axios";

class Device {
    constructor() {
      this.Device = "";
      this.ip = "";
    }
  
    async deviceToggleValue(value) {
      switch (this.Device) {
        case "fan":
          this.setSpeed(value);
          break;
        case "bulb":
          this.setBrightness(value);
          break;
        default:
          break;
      }
    }
  
    async deviceToggle() {
      switch (this.Device) {
        case "fan":
          this.setSpeed();
          break;
  
        default:
          break;
      }
    }
  
    async toggle() {
      if (this.isOn === false) {
        const response = await axios.post(`http://${this.ip}/steppermotor`, {
          speedLevel:"0"
        });
        if (response.status === 200) {
          this.isOn = true;
        }
      } else {
        const response = await axios.post(`http://${this.ip}/steppermotor`, {
          speedLevel:"1"
        });
        if (response.status === 200) {
          this.isOn = false;
        }
      }
    }
  
    // This function is used to set the speed of the fan
    async setSpeed(level) {
      try {
        const response = await axios.post(`http://${this.ip}/steppermotor`, {
          speedLevel: level,
        });
      } catch (error) {
        console.log(error.message);
      }
    }
    // This function is used to toggle the bulb on and off
    async toggle() {
      if (this.isOn === false) {
        const response = await axios.post(`http://${this.ip}/bulb/on`, {
          toggle: "on",
        });
        if (response.status === 200) {
          this.isOn = true;
        }
      } else {
        const response = await axios.post(`http://${this.ip}/bulb/off`, {
          toggle: "off",
        });
        if (response.status === 200) {
          this.isOn = false;
        }
      }
    }
    // This function is used to make the bulb flash a certain number of times
    async flash(numberOfTimes) {
      try {
        const response = await axios.post(`http://${this.ip}/bulb/flash`, {
          times: numberOfTimes,
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  
    // This function is used to set the brightness of the bulb
    async setBrightness(level) {
      try {
        const response = await axios.post(`http://${this.ip}/bulb/on`, {
          brightnessLevel: level,
        });
      } catch (error) {
        console.log(error.message);
      }
    }
    
    setIP(ip) {
      this.ip = ip;
    }

    setDevice(device) {
      this.Device = device;
    }
    
    getDevice() {
      return this.Device;
    }
  }
  export default Device;
  