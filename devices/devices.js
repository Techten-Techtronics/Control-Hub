//Device Class
class Device {
    constructor() {
      this.url =""
      this.Device = "";
      this.isOn == false;
    }
    
    setUrl(url) {
      this.url = url
    }

    getUrl() {
      return this.url
    }

    setDevice(device) {
      this.Device = device;
    }
    
    getDevice() {
      return this.Device;
    }
  
    async deviceToggleValue(value) {
      console.log(this.Device)
      switch (this.Device) {
        case "Fan":
          console.log(value)
          this.setSpeed(value);
          break;
        case "Bulb":
          this.setBrightness(value);
          break;
        default:
          break;
      }
    }
  
    async deviceToggle() {
      switch (this.Device) {
        case "Fan":
          console.log("Fan is being toggled")
          this.setSpeed(0);
          break;
        case "Bulb":
          this.bulbToggle(0);
          break;
        default:
          break;
      }
    }
  
  
  
    // This function is used. to set the speed of the fan
    async setSpeed(level) {
      console.log(this.url)
      fetch('http://'+this.url+':4000/dcmotor', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:JSON.stringify( {
          speedLevel:level
        }) // body data type must match "Content-Type" header
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
  

  }
  export default Device;
  