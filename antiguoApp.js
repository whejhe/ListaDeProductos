// App.js
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const [producto, setListaProductos] = useState([]);

  useEffect(() => {
    getListaProductos().then(producto => {
      setListaProductos(producto);
    });
  }, []);

  const getListaProductos = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {producto.map(producto => (
            <View key={producto.id} style={styles.imageProducto}>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={{
                  uri: producto.image,
                }}
              />
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
                {producto.title}
              </Text>
              <Text style={{ color: "#fff" }}>{producto.price}€</Text>
              <Text style={{ color: "#fff" }}>{producto.category}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  imageProducto: {
    width: 350,
    height: 250,
    resizeMode: "contain",
    backgroundColor: "black",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 10,
    overflow: "hidden",
  },
  image: {
    width: 150,
    height: 150,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  safeArea: {
    flex: 1,
    margin: 15,
  },
});
