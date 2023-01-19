import axios from "axios";

const civipokeapi = axios.create({
  baseURL: 'http://localhost:3100/'
});

export default civipokeapi
