import axios from "axios";


class IP {
    constructor() {
        this.ip = "";
        this.status = "unknown";
    }
    async CheckIP(ip) {
        try {
            const response = await axios.get(`http://${ip}/`);
            if (response.message === "Connection Successful!") {
                this.ip = ip;
                this.status = "connected";
            }
        }
        catch (error) {
            console.log(error.message);
            if (error.message === "Network Error") {
                this.status = "no connection";
            }
        }
    }
}

export default IP;