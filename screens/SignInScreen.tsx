import React from "react";
import {
  AsyncStorage,
  StyleSheet,
  KeyboardAvoidingView,
  View
} from "react-native";
import {
  Button,
  Divider,
  HelperText,
  Text,
  TextInput,
  TouchableRipple
} from "react-native-paper";
import { Formik } from "formik";

export default function SignInScreen(props) {
  // TODO: in real app, call external auth service and set authToken from
  // response and also set expiration date for auth token, show loading indicator
  // consider use validationschema https://jaredpalmer.com/formik/docs/guides/validation#validationschema
  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={values => {
          let errors: { email?: string; password?: string } = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          } else if (!values.password) {
            errors.password = "Required";
          } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i.test(
              values.password
            )
          ) {
            errors.password =
              "Must contain at least one number, one upper case, one lower case & one special character";
          }
          return errors;
        }}
        onSubmit={async values => {
          await AsyncStorage.setItem(
            "@AuthStore:authToken",
            "abcxsdmadkamda123"
          );
          props.navigation.navigate("Main");
          console.log(values);
        }}
      >
        {formProps => (
          <View>
            <View style={styles.inputGroup}>
              <TextInput
                mode="outlined"
                label="Email"
                value={formProps.values.email}
                onBlur={formProps.handleBlur("email")}
                onChangeText={formProps.handleChange("email")}
              />
              <HelperText
                type="error"
                visible={formProps.errors.email && formProps.touched.email}
              >
                {formProps.errors.email}
              </HelperText>
              <TextInput
                mode="outlined"
                label="Password"
                secureTextEntry={true}
                value={formProps.values.password}
                onBlur={formProps.handleBlur("password")}
                onChangeText={formProps.handleChange("password")}
              />
              <HelperText
                type="error"
                visible={
                  formProps.errors.password && formProps.touched.password
                }
              >
                {formProps.errors.password}
              </HelperText>
            </View>

            <Button
              mode="contained"
              disabled={
                formProps.values.email === "" ||
                formProps.values.password === "" ||
                formProps.errors.email ||
                formProps.errors.password
              }
              onPress={formProps.handleSubmit}
            >
              Sign In
            </Button>
          </View>
        )}
      </Formik>

      <Divider />

      <View style={styles.btmTouchText}>
        <TouchableRipple
          onPress={() => props.navigation.navigate("SignUp")}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Text>I don't have an account.</Text>
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
