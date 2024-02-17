import axios from "axios";

class IP {
    constructor() {
        this.ip = "";
        this.status = "unknown";
    }
     //Function to check whether server is online
 CheckIP = async (ip) => {
    /*
     Checking whether flask server is online 
     If flask server is online set the status to true
    */
   try {
    const  response = axios.get(`http://${ip}:5000/main`)
    this.status = response.message
   } catch (error) {
      console.log(error.message)
   }
}
}


export default IP;