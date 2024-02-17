
class Device {
    constructor() {
      this.url =""
      this.Device = "";
      this.isOn == false;
    }

    setUrl(url) {
      this.url = url
    }

    getUrl(url) {
      return this.url
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
        case "bulb":
          this.bulbToggle();
          break;
        default:
          break;
      }
    }
  
  
  
    // This function is used. to set the speed of the stepper motor
    async setSpeed(level) {
      fetch(this.url+'/steppermotor`', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: {
          speedLevel:level
        } // body data type must match "Content-Type" header
      })
      .then(()=>{
        this.isOn = true
      })
      .catch((error)=>{
        console.log(error.message)
      });
    }
    // This function is used to toggle the bulb on and off
    async bulbToggle() {
      if (this.isOn === false) {
        fetch(this.url+'/bulb', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: {
            toggle:"on"
          } // body data type must match "Content-Type" header
        })
        .then(()=>{
          this.isOn = true
        })
        .catch((error)=>{
          console.log(error.message)
        });
      } else {
        fetch(this.url+'/bulb', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: {
            toggle:"off"
          } // body data type must match "Content-Type" header
        })
        .then(()=>{
          this.isOn = false
        })
        .catch((error)=>{
          console.log(error.message)
        });
      }
    }
    // This function is used to make the bulb flash a certain number of times
    async flash(numberOfTimes) {
      fetch(this.url+'/bulb/flash', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: {
          numberOfTimes:numberOfTimes
        } // body data type must match "Content-Type" header
      })
      .catch((error)=>{
        console.log(error.message)
      });
    }
  
    // This function is used to set the brightness of the bulb
    async setBrightness(level) {
      fetch(this.url+'/bulb', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: {
          brightnessLevel:level
        } // body data type must match "Content-Type" header
      })
      .catch((error)=>{
        console.log(error.message)
      });
    }
  
    setDevice(device) {
      this.Device = device;
    }
    
    getDevice() {
      return this.Device;
    }
  }
  export default Device;
  