import { StyleSheet, View, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

export default function App() {
  // TODO: buscar manera de hacer statusbar solido en vez de usar view vacio (chapuza)
  return (
    <View style={styles.container}>
      <View style={styles.statusbar} />
      <StatusBar style="auto" />
      <WebView
        style={styles.webview}
        source={{ uri: "https://www.educa2.madrid.org/educamadrid/" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  webview: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    paddingTop: Constants.statusBarHeight,
  },

  statusbar: {
    height: Constants.statusBarHeight,
  },
});
