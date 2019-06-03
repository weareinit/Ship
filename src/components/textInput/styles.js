import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: "white",
        borderWidth: .3,
        borderColor: 'gray',
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center'
    },
    textInput: {
        flex: 1,
        padding: 12,
        borderRadius: 10,
        color: "#665b50",
    },
});

module.exports = styles;
