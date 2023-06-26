import { StyleSheet, View } from "react-native";
import ChatLoL from "./src";

export default function App() {
  return (
    <View style={styles.container}>
      <ChatLoL />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
