import { Stack } from "expo-router/stack";
import styleVariables from "../../config/styleVariables";

export default function Layout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: styleVariables.primary,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          contentStyle: {
            backgroundColor: "#FFF",
          },
        }}
      />
    </>
  );
}
