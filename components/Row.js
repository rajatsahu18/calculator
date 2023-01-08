import { StyleSheet, View } from "react-native";

export const Row = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});