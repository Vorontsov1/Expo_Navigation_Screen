import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

const FavoritesScreen = ({route, navigation, username }) => {
  const { items } = route.params;
 
  const onHome = () => {
    navigation.navigate("Login", { username: username });
  };
  // fonts started

  const [fontsLoaded] = useFonts({
    "RobotoMono-Bold": require("../../assets/fonts/RobotoMono-Bold.ttf"),
    "AbrilFatface-Regular": require("../../assets/fonts/AbrilFatface-Regular.ttf"),
    "Robotomono-Thin": require("../../assets/fonts/RobotoMono-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  // fons finish

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>FAVORITE COLORS</Text>
      <Text style={styles.discrText}>Your colors;</Text>

      <View style={styles.colorItemContainer}>
        {items.map((item) => (
          <View
            key={item.id}
            style={[
              styles.colorItem,
              { backgroundColor: item.backgroundColor },
            ]}
          ></View>
        ))}
      </View>

      <TouchableOpacity onPress={onHome} style={styles.button}>
        <Text style={styles.textButton}>DONE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: "#f6ae2d",
  },
  headerText: {
    color: "#fff",
    fontFamily: "RobotoMono-Bold",
    fontSize: 30,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "center",
  },
  discrText: {
    color: "#fff",
    fontFamily: "RobotoMono-Bold",
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 10,
  },
  colorItemContainer: {
    flex: 1,
  },
  colorItem: {
    height: 50,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 5,
    backgroundColor: "#733737",
    margin: 10,
  },
  button: {
    backgroundColor: "#6d8afe",
    borderWidth: 2,
    borderColor: "white",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 50,
    margin: 10,
  },
  textButton: {
    fontFamily: "RobotoMono-Bold",
    fontSize: 20,
    color: "white",
  },
});

export default FavoritesScreen;
