import axios from "axios";
// import jwt from "jsonwebtoken";
import { asyncGetData, asyncStoreData, asyncDeleteData } from "../utilities";
const SERVER_URL = "https://immense-reef-66486.herokuapp.com/";

const request = axios.create({ baseURL: SERVER_URL });
const tokenKey = "userToken";

/**
 * Verifies that the user has a valid JWT
 */
const isLoggedIn = async () => {
  try {
    const token = await asyncGetData(tokenKey);

    // await jwt.verify(token, "n");

    return token;
  } catch (e) {
    alert("Invalid token!"); //test
  }
};

/**
 * Returns token from backend if provided credentials
 * @param {Object} credentials - user email and password
 */
const login = async credentials => {
  try {
    let { data } = await request.post("application/login", credentials);

    const token = data.data;

    asyncStoreData(tokenKey, token);

    return data.success;
  } catch (e) {
    alert("Invalid Password or email address!");
  }
};

/**
 *
 * @param {Function} action
 */
const logout = async action => {
  try {
    await asyncStoreData(tokenKey, null);

    action();
  } catch (e) {
    console.log(e);
  }
};

export { login, logout, isLoggedIn };
