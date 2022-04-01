import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";

export default function Dashboard() {
  return (
  <SafeAreaView style={styles.container}>
      <Text>My cool React Native App.</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
        theme = {{ roundness : 10}}
      >
        Press me
      </Button>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

