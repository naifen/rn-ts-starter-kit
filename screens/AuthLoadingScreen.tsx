import React, { useEffect } from "react";
import { View, AsyncStorage } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

export default function AuthLoadingScreen(props) {
  useEffect(() => {
    (async () => {
      try {
        const authToken = await AsyncStorage.getItem("@AuthStore:authToken");
        props.navigation.navigate(authToken ? "Main" : "Auth");
      } catch (e) {
        console.log(JSON.stringify(e));
      }
    })();
  }, []); // only called on component mount

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20
      }}
    >
      <ActivityIndicator size="large" animating={true} color={Colors.blue800} />
    </View>
  );
}
