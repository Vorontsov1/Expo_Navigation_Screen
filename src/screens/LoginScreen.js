import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import { FontAwesome5 } from "@expo/vector-icons";

const LoginScreen = ({ route, navigation }) => {
  const [username, setUsername] = useState("");
    const onLogin = () => {
        navigation.navigate("Home", {username:  username})
    }
  const [fontsLoaded] = useFonts({
    "RobotoMono-Bold": require("../../assets/fonts/RobotoMono-Bold.ttf"),
    "RobotoMono-Light": require("../../assets/fonts/RobotoMono-Light.ttf"),
    "AbrilFatface-Regular": require("../../assets/fonts/AbrilFatface-Regular.ttf"),
    "Robotomono-Thin": require("../../assets/fonts/RobotoMono-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name="user-alt" size={80} color="red" />
      </View>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Your name"
        placeholderTextColor="#000"
        style={styles.text}
      />

          <TouchableOpacity disabled={username.length < 3} onPress={onLogin}
              style={[styles.button, {opacity: username.length < 3 ? 0.9 : 1}]}>
        <Text style={styles.textButton}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f6ae2d",
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: "RobotoMono-Light",
    padding: 15,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    color: "white",
  },
  button: {
    backgroundColor: "#6d8afe",
    borderWidth: 2,
    borderColor: "white",
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
  },
  textButton: {
    fontFamily: "RobotoMono-Bold",
    fontSize: 20,
    color: "white",
  },
});

export default LoginScreen;
