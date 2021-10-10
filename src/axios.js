import axios from "axios";

/*Base URL Makes request to the Server API*/
const instance = axios.create({
  baseURL: "https://murmuring-wave-94302.herokuapp.com/api/v1",
});

export default instance;
