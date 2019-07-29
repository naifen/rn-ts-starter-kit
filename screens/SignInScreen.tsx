import React from "react";
import { View, AsyncStorage } from "react-native";
import { Button, Divider, Text } from "react-native-paper";

const SignInScreen = props => {
  const handleLogin = async () => {
    // in real app, call external auth service and set authToken from response
    // and also set expiration date for auth token
    await AsyncStorage.setItem("@AuthStore:authToken", "abcxsdmadkamda123");
    props.navigation.navigate("Main");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20
      }}
    >
      <Text>This is SignIn screen</Text>

      <Divider />

      <Button mode="outlined" onPress={handleLogin}>
        Login
      </Button>

      <Divider />

      <Button
        mode="outlined"
        onPress={() => props.navigation.navigate("SignUp")}
      >
        Go to SignUp screen
      </Button>
    </View>
  );
};

export default SignInScreen;
