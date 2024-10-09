import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
// import { Image } from "react-native-web";

// import icon from'./assets/icon.png';

export default function App() {
  const [producto, setListaProductos] = useState([]);

  useEffect(() => {
    getListaProductos().then((producto) => {
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
      <StatusBar style="light" />
      <ScrollView>
        {producto.map((producto) => (
          <View key={producto.id} style={styles.imageProducto}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{
                uri: producto.image,
              }}
            />
            <Text>{producto.title}</Text>
            <Text>{producto.price}</Text>
            <Text>{producto.category}</Text>
          </View>
        ))}
      </ScrollView>
      {/* <Image source={icon} style={{ width: 100, height: 100, resizeMode: 'contain' }} /> */}
      <Text>Open up App.js to start working on your app!</Text>
      {/* <Button title="Pulsa aqui" onPress={() => alert('Hola que tal')}/> */}
      {/* boton personalizado */}
      {/* <Pressable
        underlayColor={"#fff"}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#fff",
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {({ pressed }) => (
          <Text style={{ color: pressed ? "#000" : "#fff" }}>Hola</Text>
        )}
      </Pressable> */}
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
    backgroundColor: "#fff",
    textAlign: "center",
    // borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 10,
    overflow: "hidden",
  },
  image: {
    width: 100, // Tamaño explícito de la imagen
    height: 100, // Tamaño explícito de la imagen
  },
});
