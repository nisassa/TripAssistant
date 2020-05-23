import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import RegisterScreen from '.././screens/userAccount/registerScreen';
import LoginScreen from '.././screens/userAccount/loginScreen'
import LoginMainScreen from '../screens/userAccount/loginMainScreen'

const screens = {
  "Main": { 
    screen: LoginMainScreen,
  },
  "Register": { 
    screen: RegisterScreen,
  },
  "Login": { 
    screen: LoginScreen,
  }   
}

const LoginNavigator = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerShown: false,
  }
})

export default createAppContainer(LoginNavigator);