import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import { StyleSheet } from "react-native";
import HomeRoute from "./HomeScreen";
import ProfileRoute from "./ProfileScreen";


const MainScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    { key :"search", title:"Search", icon: "file-search"},
    { key: "profile", title: "Profile", icon: "account" },
    { key: 'settings', title: 'Settings', icon:'cogs'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    profile: ProfileRoute,
    settings:ProfileRoute
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor : "gray",
  },
});