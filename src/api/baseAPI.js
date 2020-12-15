import axios from "axios";

const authAPI = axios.create({
  baseURL: process.env.REACT_APP_REQRES_API,
});

const refactoryAPI = axios.create({
  baseURL: process.env.REACT_APP_REFACTORY_API,
});

export { authAPI, refactoryAPI };
