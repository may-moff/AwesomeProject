import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import Example from "./src/components/Example";

export default function App() {
  return (
    <>
      <Example />
      <View style={styles.container}>
        <Text style={styles.maya}>Hello, Okan what up yo!</Text>
        <Text>Hello, Okan what up yo!</Text>
        <Text>Hello, Okan what up yo!</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={{ width: 200, height: 200 }}
        />
        <Example />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            padding: 5,
            margin: 15,
          }}
          defaultValue="You can type in me"
        />
      </View>
      <ScrollView style={{ backgroundColor: "#d709f7" }}>
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>

        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={{ width: 200, height: 200 }}
        />

        <Text style={{ fontSize: 96 }}>Scrolling down</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={{ width: 200, height: 200 }}
        />

        <Text style={{ fontSize: 96 }}>Framework around?</Text>

        <Text style={{ fontSize: 80 }}>React Native</Text>
      </ScrollView>
    </>
  );
}

// const styles = {
//   container: {
//     // flex: 1,
//     backgroundColor: "#d709f7",
//     alignItems: "center",
//     justifyContent: "center",
//     paddingTop: 80,
//   },
//   maya: {
//     color: "green",
//   },
// };

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#d709f7",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
  },
  maya: {
    color: "green",
  },
});
