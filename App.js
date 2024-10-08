import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Image } from 'react-native-web';

// import icon from'./assets/icon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" /> 
      {/* <Image source={icon} style={{ width: 100, height: 100, resizeMode: 'contain' }} /> */}
      <Text>Open up App.js to start working on your app!</Text>
      {/* <Button title="Pulsa aqui" onPress={() => alert('Hola que tal')}/> */}
      {/* boton personalizado */}
      <Pressable
      underlayColor={"#fff"} 
      style={{width: 100, height: 100, backgroundColor: '#fff', borderRadius: 100,
      alignItems: 'center', justifyContent: 'center'
      }}
      >{({pressed}) => (
        <Text style={{color: pressed ? "#000" : "#fff"}}>Hola</Text>
      )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
