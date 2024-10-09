// src/ProductDetails.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProductDetails({ route }) {
  const { producto } = route.params;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: producto.image }}
      />
      <Text style={styles.title}>{producto.title}</Text>
      <Text style={styles.price}>{producto.price}€</Text>
      <Text style={styles.description}>{producto.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    color: "#fff",
    fontSize: 20,
  },
  description: {
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
  },
});
