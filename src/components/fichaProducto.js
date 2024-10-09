// Modal para ver la ficha de un producto
import React, { useState } from "react";
import { View, Text, Image, Button, Modal } from "react-native";
import { Pressable, ScrollView } from "react-native-gesture-handler";

export default function FichaProducto({ route, navigation }) {
    const { producto } = route.params;
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={{ uri: producto.image }}
                />
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
                    {producto.title}
                </Text>
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
                    {producto.description}
                </Text>
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
                    {producto.price}
                </Text>
            </View>
            <Pressable>
                {/* Volver a app.js */}
            </Pressable>
        </ScrollView>
    );
}