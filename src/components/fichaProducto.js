// src/components/fichaProducto.js
// Modal para ver la ficha de un producto
import React, { useState } from 'react';
import { View, Text, Image, Modal } from 'react-native';

export default function FichaProducto({ route, navigation }) {
    const { producto } = route.params;
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Modal
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View>
                    <Image source={{ uri: producto.image }} />
                    <Text>{producto.title}</Text>
                    <Text>{producto.description}</Text>
                    <Text>{producto.price}</Text>
                </View>
            </Modal>
        </View>
    );
}