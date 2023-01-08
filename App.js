import React from "react";
import { StyleSheet, View } from "react-native";
import Calculator from "./components/Calculator";

const App = () => {
  return (
  <View style={styles.container}>
    <Calculator/>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
});

export default App;