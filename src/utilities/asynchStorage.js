import { AsyncStorage } from "react-native";

/**
 * add an item to local storage
 * @param {String} key
 * @param {String} value
 * @param {Function} action
 */
const asyncStoreData = async (key, value, action) => {
  try {
    return await AsyncStorage.setItem(key, value, action);
  } catch (e) {
    alert("unable to save data!");
  }
};

/**
 * retrieve an item from local storage
 * @param {String} key
 * @param {Function} action
 */
const asyncGetData = async (key, action) => {
  try {
    const value = await AsyncStorage.getItem(key, action);
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
    alert("unable to read data!");
  }
};

/**
 * removes an item from local storage
 * @param {String} key
 * @param {Function} action
 */
const asyncDeleteData = async (key, action) => {
  try {
    const value = await AsyncStorage.removeItem(key, action);
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
    alert("unable to remove data!");
  }
};

export { asyncGetData, asyncStoreData, asyncDeleteData };
