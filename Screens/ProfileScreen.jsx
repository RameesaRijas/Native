import { SafeAreaView, StyleSheet } from "react-native";
import { Avatar, Title } from "react-native-paper";

const ProfileRoute = () => (
  <SafeAreaView style={styles.container}>
    <Title>Profile page</Title>
    <Avatar.Image size={24} source={require('../assets/avatar.png')} />
  </SafeAreaView>
);
export default ProfileRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});