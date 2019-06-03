import React from 'react';
import { TouchableOpacity, Text } from "react-native";
import styles from './styles'

/**
 * returns a button
 * @param {String} title
 * @param {Function} handlePress
 */
const Button = (props) => {

    return (
        <TouchableOpacity style={styles.buttonStyles} onPress={props.handlePress}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Button;