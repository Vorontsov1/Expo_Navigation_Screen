import {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { FontAwesome5 } from "@expo/vector-icons";

const HomeScreen = ({ navigation, route }) => {
  const { username } = route.params;
  const ITEMS = [
    { id: 1, backgroundColor: "#003049" },
    { id: 2, backgroundColor: "#D62828" },
    { id: 3, backgroundColor: "#FF77F00" },
    { id: 4, backgroundColor: "#5C8001" },
    { id: 5, backgroundColor: "#FB6107" },
    { id: 6, backgroundColor: "#F72585" },
  ];
    
    const [selectedItems, setSelectedItems] = useState([]);

    const onItemSelected = (selectedItem) => {
        const isSelected = selectedItems.some((item) => item.id === selectedItem.id); 
        if (isSelected === false) {
            setSelectedItems([...selectedItems, selectedItem]);
        } else {
            setSelectedItems(selectedItems.filter((item) => item.id !== selectedItem.id));
        }
    };

    const onContinue = () => {
        navigation.navigate('Favorites', {items: selectedItems})
    }

  const [fontsLoaded] = useFonts({
    "RobotoMono-Bold": require("../../assets/fonts/RobotoMono-Bold.ttf"),
    "AbrilFatface-Regular": require("../../assets/fonts/AbrilFatface-Regular.ttf"),
    "Robotomono-Thin": require("../../assets/fonts/RobotoMono-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Home</Text>
      <Text style={styles.titleText}>
        Welcome, <Text style={styles.titleText}>{username}</Text>
      </Text>
      <Text style={styles.discrText}>Select Color:</Text>

      <View style={styles.colorItemContainer}>
        {ITEMS.map((item) => (
            <TouchableOpacity
              onPress={() => onItemSelected(item)}
            key={item.id}
                style={[styles.colorItem, { backgroundColor: item.backgroundColor }]}>
        { selectedItems.some((items) => items.id == item.id) &&  <FontAwesome5
              style={styles.icon}
              name="check-circle"
              size={24}
              color="white"
            />}
          </TouchableOpacity>
        ))}
          </View>
          
          <TouchableOpacity style={[styles.button, {opacity: selectedItems.length === 0 ? 0.5 : 1}]}
              disabled={selectedItems.length === 0}
              onPress={() => onContinue()}
          >
              <Text style={styles.textButton}>Continue</Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  titleText: {
    color: "#fff",
    fontFamily: "RobotoMono-Bold",
    fontSize: 20,
  },
  discrText: {
    color: "#fff",
    fontFamily: "RobotoMono-Bold",
    fontSize: 20,
    marginTop: 40,
    marginBottom: 10,
  },
  icon: {
    marginHorizontal: 15,
  },
  colorItem: {
    height: 50,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 5,
    backgroundColor: "#733737",
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

export default HomeScreen;
