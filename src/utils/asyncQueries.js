/**
 * Manages persistent DB
 * - Note: reason for this "redundant" implementation is that it allows us to easily swap out  AsyncStorage
 */

import { AsyncStorage } from "react-native";

/**
 * Appends a value with assigned key to AsyncStorage
 *  - returns true or false
 * @param {String} key - value key
 * @param {Any} value - value to be stored
 */
const store = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    // console.error("Status:", error);
    return false;
  }
};

/**
 * Returns value of given key
 * @param {String} key - retrieving value key
 */
const retrieve = async key => {
  const value = await AsyncStorage.getItem(key);
  return value;
};

/**
 * Removes an item
 * @param {String} key - key of value to be deleted
 */
const remove = async key => {
  return await AsyncStorage.removeItem(key);
};

/**
 * Removes a list of items
 * @param {Array} args - list of keys to be removed
 */
const removeMulti = async (...args) => {
  return await AsyncStorage.multiRemove(args);
};

/**
 * Clears AsyncStorage
 * - "Erases all AsyncStorage for all clients, libraries, etc. You probably don't want to call this."
 */
const clear = async () => {
  return await AsyncStorage.clear();
};

export default { retrieve, store, remove, removeMulti, clear };
