import queryString from "query-string";
import request from "./resquest";
import asyncQueries from "../utils/asyncQueries";
import APIs from "../constants/APIs";

const { LOGIN } = APIs.turtle;

const TOKEN = "JWT";
const ID = "shellID";

const isAuthorized = () => {
  try {
    asyncQueries.retrieve(TOKEN).then(value => value);
  } catch (error) {
    return false;
  }
};

/**
 * Logs in user
 * @param {Object} credentials - username and  password
 */
const login = async (credentials, navigation) =>
  request({
    method: "post",
    url: LOGIN,
    data: credentials
  })
    .then(resp => {
      console.log(resp);
      const { JWT } = resp.data;
      asyncQueries.store(TOKEN, JWT);
      console.log(JWT);
    })
    .then(() => {
      asyncQueries.retrieve(JWT).then(val => console.log(val));

      if (data) navigation.navigate("Main");
    })
    .catch(error => {
      return error;
    });

/**
 * Get users informations
 * @param {Object} history - react-router history object
 */
const getInfo = async history => {
  const token = await isAuthorized(history);
  const shellID = await asyncQueries.retrieve(ID);

  return await request({
    method: "post",
    url: READ_USER,
    data: { shellID },
    headers: {
      Authorization: "Bearer " + token
    }
  })
    .then(resp => {
      if (resp.data === null) {
        querries.deAuthorize();
        history.push(LOGIN);
      }
      const data = JSON.stringify(resp.data);
      return data;
    })
    .catch(error => {
      alert("Something went wrong!", error);
      asyncQueries.removeMulti(JWT, shellID);
      history.push("Auth");
    });
};

export default {
  login,
  getInfo,
  isAuthorized
};
