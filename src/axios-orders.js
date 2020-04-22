import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-e6b26.firebaseio.com/",
});

export default instance;
