import axios from "axios";

const civipokeapi = axios.create({
  baseURL: 'https://localhost:3100/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default civipokeapi
