import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    container: {
        height: '100%',
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
        // backgroundColor: 'rgb(242, 226, 184)',
    },
    formContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    layoutTrick: {
        flex: 3,
    },
    inputIcons: {
        paddingLeft: 10,
        paddingRight: 10
    },
    backButton: {
        paddingTop: 30,
        color: '#675C50',
        alignSelf: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logo: {
        flex: 4,
        width: '100%',
        height: undefined,
    },
});

module.exports = styles;
