import axios from 'axios'

class Bulb {
    constructor() {
            this.isOn=false
            this.ip ="0.0.0.0"
    }
    
    // This function is used to toggle the bulb on and off
    async toggle() {
        if (this.isOn ===false) {
          const response = await axios.post(`http://${this.ip}/bulb/on`,{
            toggle:"on"
          })
          if (response.status === 200) {
            this.isOn = true
          }
    }
    else {
      const response = await axios.post(`http://${this.ip}/bulb/off`,{
        toggle:"off"
      })
      if (response.status === 200) {
        this.isOn = false
      }
    }
}
    // This function is used to make the bulb flash a certain number of times
    async flash(numberOfTimes) {
        try {
            const response = await axios.post(`http://${this.ip}/bulb/flash`,{
                times: numberOfTimes
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    
    // This function is used to set the brightness of the bulb
    async setBrightness(level) {
        try {
            const response = await axios.post(`http://${this.ip}/bulb/on`,{
                brightnessLevel: level
            })
        } catch (error) {
            console.log(error.message)
        }
    }

}


export default Bulb