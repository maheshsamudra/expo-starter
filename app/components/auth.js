import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Text } from "react-native";
import styleVariables from "../../config/styleVariables";
import { useUser } from "../../hooks/useUser";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, register, resetPassword, logout, user } = useUser();

  console.log("user:", user?.email);
  return (
    <View style={styles.view}>
      <TextInput
        placeholder={"Email"}
        style={styles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        placeholder={"Password"}
        style={styles.input}
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      {user?.email && <Text>Logged in as {user?.email}</Text>}
      <View style={styles.buttons}>
        {!user?.uid ? (
          <>
            <Button
              title={"Signup"}
              color={styleVariables.primary}
              onPress={() => register(email, password)}
            />
            <Text>|</Text>
            <Button
              title={"Login"}
              color={styleVariables.primary}
              onPress={() => login(email, password)}
            />
            <Text>|</Text>
            <Button
              title={"Reset Password"}
              color={styleVariables.primary}
              onPress={() => resetPassword(email)}
            />
          </>
        ) : (
          <>
            <Button
              title={"Logout"}
              color={styleVariables.primary}
              onPress={async () => await logout()}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  view: { width: "80%", padding: 12 },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
