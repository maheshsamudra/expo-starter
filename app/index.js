import { Text, View, StyleSheet, Button } from "react-native";
import { Link, Stack } from "expo-router";
import styleVariables from "../config/styleVariables";
import Auth from "./components/auth";

export default function HomePage() {
  return (
    <View style={styles.wrapper}>
      <Stack.Screen
        options={{
          title: "Welcome",
        }}
      />
      <Text>Home page</Text>

      <Auth />

      <Link
        href={{
          pathname: "/settings",
          params: { id: "bacon" },
        }}
        asChild
      >
        <Button title="View Settings" color={styleVariables.primary} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
