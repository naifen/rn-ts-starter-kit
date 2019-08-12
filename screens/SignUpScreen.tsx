import React, { useState } from "react";
import {
  AsyncStorage,
  StyleSheet,
  KeyboardAvoidingView,
  View
} from "react-native";
import {
  Button,
  Divider,
  Text,
  TextInput,
  TouchableRipple
} from "react-native-paper";

export default function SignUpScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUp = async () => {
    console.log("Email is: " + email);
    console.log("Password is: " + password);
    console.log("Username is: " + username);
    // TODO: in real app, call external auth service and set authToken from
    // response and also set expiration date for auth token, show loading indicator
    await AsyncStorage.setItem("@AuthStore:authToken", "abcxsdmadkamda123");
    props.navigation.navigate("Main");
  };

  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <View>
        <View style={styles.inputGroup}>
          <TextInput
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            mode="outlined"
            label="Username"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            mode="outlined"
            label="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
        </View>

        <Button mode="contained" onPress={handleSignUp}>
          Sign Up
        </Button>
      </View>

      <Divider />

      <View style={styles.btmTouchText}>
        <TouchableRipple
          onPress={() => props.navigation.navigate("SignIn")}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Text>I already have an account</Text>
        </TouchableRipple>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  inputGroup: {
    marginBottom: 20
  },
  btmTouchText: {
    marginTop: 20,
    alignItems: "center"
  }
});
