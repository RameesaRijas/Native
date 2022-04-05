import { View, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const Header = () => (
  <View>
    <Appbar.Header style={styles.container}>
      <Appbar.Content title="Example" />
      <Appbar.Action
        icon="dots-vertical"
        onPress={() => console.log("handle press")}
      />
    </Appbar.Header>
  </View>
);
export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor : "gray",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});