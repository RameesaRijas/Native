import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import { StyleSheet } from "react-native";
import HomeRoute from "./HomeScreen";
import ProfileRoute from "./ProfileScreen";


const MainScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "profile", title: "Profile", icon: "file" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    profile: ProfileRoute,
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