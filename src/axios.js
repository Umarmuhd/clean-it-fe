import axios from "axios";

/*Base URL Makes request to the Server API*/
const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
});

export default instance;
