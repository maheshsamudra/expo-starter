import { Text, View, StyleSheet, Button } from "react-native";
import { Link, Stack } from "expo-router";
import styleVariables from "../config/styleVariables";

export default function Settings() {
  return (
    <View style={styles.wrapper}>
      <Stack.Screen
        options={{
          title: "Settings",
        }}
      />
      <Text>Settings page</Text>
      <Link href="/" asChild>
        <Button title="Back to Home" color={styleVariables.primary} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
