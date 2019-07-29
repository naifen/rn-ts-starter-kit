import React from "react";
import { View } from "react-native";
import { Button, Divider, Text } from "react-native-paper"

const SignUpScreen = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20
      }}
    >
      <Text>This is SignUp screen</Text>

      <Divider />

      <Button
        mode="outlined"
        onPress={() => props.navigation.navigate("SignIn")}
      >
        Go to SignIn screen
      </Button>

      <Divider />

      <Button mode="contained" onPress={() => console.log("Sign Up")}>
        Sign Up
      </Button>
    </View>
  );
};

export default SignUpScreen;
