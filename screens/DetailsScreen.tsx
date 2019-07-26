import React from "react";
import { ScrollView, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Button, Text } from "react-native-paper";

export default function DetailsScreen(props) {
  const someParam = props.navigation.getParam("someParam", "Default param");

  return (
    <View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 20
          }}
        >
          <Text>This is Settings screen</Text>
          <Button
            mode="outlined"
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://reactnavigation.org/docs/en/stack-navigator.html"
              )
            }
          >
            Create Stack Navigator DOC
          </Button>

          <Text>Params:</Text>
          {someParam && <Text>{someParam}</Text>}
        </View>
      </ScrollView>
    </View>
  );
}
