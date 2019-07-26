import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Divider, Text } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";

export default function LinksScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>Expo Resources</Text>
        <Button
          mode="contained"
          onPress={() => WebBrowser.openBrowserAsync("http://docs.expo.io")}
        >
          Open Expo Docs
        </Button>

        <Divider />

        <Button
          mode="contained"
          onPress={() => WebBrowser.openBrowserAsync("http://forums.expo.io")}
        >
          Open Expo Forums
        </Button>

        <Divider />

        <Button
          mode="contained"
          onPress={() => WebBrowser.openBrowserAsync("https://slack.expo.io")}
        >
          Open Expo Slack
        </Button>

        <Divider />

        <Text>React Navigation Modal transition mode</Text>
        <Button
          mode="contained"
          onPress={() =>
            props.navigation.navigate("Details", {
              someParam: "This is the param passed from LINKs page.",
              navType: "Modal"
            })
          }
        >
          Go to Details page Modal mode
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff"
  }
});
