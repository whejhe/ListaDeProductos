// src/ProductList.js
import React, { useState, useEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";

export default function ProductList({ navigation }) {
  const [productos, setListaProductos] = useState([]);

  useEffect(() => {
    getListaProductos().then(productos => {
      setListaProductos(productos);
    });
  }, []);

  const getListaProductos = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {productos.map(producto => (
          <Pressable
            key={producto.id}
            onPress={() => navigation.navigate("Details", { producto })}
          >
            <View style={styles.imageProducto}>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={{ uri: producto.image }}
              />
              <Text style={styles.text}>{producto.title}</Text>
              <Text style={styles.text}>{producto.price}€</Text>
              <Text style={styles.text}>{producto.category}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageProducto: {
    backgroundColor: "#333",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 5,
  },
  safeArea: {
    flex: 1,
    margin: 15,
  },
  scrollContent: {
    paddingBottom: 20,
  },
});
