import { createStackNavigator } from "react-navigation";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

const authNavigator = createStackNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen
  },
  { initialRouteName: "SignIn", headerMode: "none" }
);

export default authNavigator;
