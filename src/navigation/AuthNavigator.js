import { createStackNavigator } from 'react-navigation';
import AuthScreen from '../screens/Auth';

/**
 * returns authentification navigation stack
 * @AuthScreen - React Native Component
 */

const AuthStack = createStackNavigator(
    { SignIn: AuthScreen }, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });

export default AuthStack;