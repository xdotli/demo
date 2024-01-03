import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { WebView } from "react-native-webview";

const image = { uri: "https://media1.tenor.com/m/Bgh1t5Lw1OEAAAAC/art.gif" };

const App = () => {
  const [title, setTitle] = useState("");
  const [inputTitle, setInputTitle] = useState("");

  return (
    <SafeAreaView>
      <View
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.bubble}>
            <Text
              style={{
                color: "#ed556a",
                fontSize: 20,
              }}
            >
              {title}
            </Text>
          </View>
          <View
            style={{
              position: "relative",
              top: "-1%",
              height: "80%",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <WebView
              style={{
                backgroundColor: "transparent",
              }}
              source={{ uri: "https://live2d.fly.dev/" }}
            />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bubble: {
    position: "relative",
    bottom: "-14%",
    height: "10%",
    margin: 20,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 3,
    padding: 5,
  },
  flexRow: {
    position: "relative",
    top: "-10%",
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 3,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  input: {
    height: 40,
    width: 300,
    marginLeft: 20,
    borderColor: "gray",
    borderWidth: 0,
  },
});

export default App;
