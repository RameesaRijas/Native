import { View, SafeAreaView, StyleSheet } from "react-native";
// import { Appbar } from "react-native-paper";
import { Title } from "react-native-paper";

const HomeRoute = () => (
  <SafeAreaView style={styles.container}>
    <Title>Home page</Title>
  </SafeAreaView>
);
export default HomeRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});


  // <View>
  //   <Appbar.Header style={styles.container}>
  //     <Appbar.Content title="Home Page" />
  //     <Appbar.Action
  //       icon="dots-vertical"
  //       onPress={() => console.log("handle press")}
  //     />
  //   </Appbar.Header>
  // </View>