import React from 'react';
import { TextInput as Input, Text, View, Keyboard, Platform } from 'react-native';

import styles from './styles'
import IconWrapper from '../iconWrapper';



class TextInput extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <IconWrapper
                    style={this.props.style}
                    size={25}
                    name={
                        Platform.OS === 'ios'
                            ? `${this.props.iosIcon}`
                            : `${this.props.mdIcon}`
                    } />
                <Input
                    autoCorrect={false}
                    placeholder={this.props.placeholder}
                    selectionColor="#FFF"
                    selectionColor="black"
                    placeholderTextColor="#b7ae98"
                    secureTextEntry={this.props.secureText}
                    clearButtonMode="always"
                    style={styles.textInput}
                    onSubmitEditing={Keyboard.dismiss}
                    blurOnSubmit={false}
                    onChangeText={this.props.handleChange}
                />
            </View>
        );
    }

}

export default TextInput;