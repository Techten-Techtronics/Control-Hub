import axios from "axios";

class Fan {
  constructor() {
    this.isOn = false;
    this.ip = "";
  }
  // This function is used to toggle the fan on and off
  async toggle() {
    if (this.isOn === false) {
      const response = await axios.post(`http://${this.ip}/fan/on`, {
        toggle: "on",
      });
      if (response.status === 200) {
        this.isOn = true;
      }
    } else {
      const response = await axios.post(`http://${this.ip}/fan/off`, {
        toggle: "off",
      });
      if (response.status === 200) {
        this.isOn = false;
      }
    }
  }

  // This function is used to set the speed of the fan
  async setSpeed(level) {
    try {
      const response = await axios.post(`http://${this.ip}/fan/speed`, {
        speedLevel: level,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default Fan;
