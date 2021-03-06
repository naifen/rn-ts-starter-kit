import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Appbar } from "react-native-paper";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DetailsScreen from "../screens/DetailsScreen";

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: ({ navigation }) => ({
        header: props => {
          return (
            <Appbar.Header>
              <Appbar.BackAction
                onPress={() => props.navigation.goBack(null)}
              />
              <Appbar.Content
                title="React Navigation"
                subtitle={`${navigation.state.params.navType ||
                  "Default"} transition mode example`}
              />
              <Appbar.Action
                icon="search"
                onPress={() => console.log("Search")}
              />
              <Appbar.Action
                icon="more-vert"
                onPress={() => console.log("Show more")}
              />
            </Appbar.Header>
          );
        }
      })
    }
  },
  { initialRouteName: "Home", headerMode: "screen" }
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const LinksStack = createStackNavigator(
  {
    Links: {
      screen: LinksScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Links"
      })
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: ({ navigation }) => ({
        header: props => {
          return (
            <Appbar.Header>
              <Appbar.Content
                title="React Navigation"
                subtitle={`${navigation.state.params.navType ||
                  "Default"} transition mode example`}
              />
              <Appbar.Action
                icon="clear"
                onPress={() => props.navigation.goBack(null)}
              />
            </Appbar.Header>
          );
        }
      })
    }
  },
  { initialRouteName: "Links", mode: "modal", headerMode: "screen" }
);

LinksStack.navigationOptions = {
  tabBarLabel: "Links",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      title: "app.json"
    })
  }
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

// Integrate React-Navigation with React-Native-Paper:
// https://github.com/react-navigation/material-bottom-tabs
const tabNavigator = createMaterialBottomTabNavigator(
  {
    HomeStack,
    LinksStack,
    SettingsStack
  },
  {
    initialRouteName: "HomeStack",
    activeColor: "#eee"
  }
);

export default tabNavigator;
