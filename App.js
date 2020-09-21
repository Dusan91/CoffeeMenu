import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './src/views/Home';
import { ImageBackground, StyleSheet, View } from 'react-native';
import background from './src/assets/img/menu.jpg';
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  blurImage: {
    backgroundColor: 'rgba(255,255,255, 0.13)',
    height: '100%',
  },
});
export default function App() {
  return (
    <ImageBackground source={background} style={styles.image}>
      <View style={styles.blurImage}>
        <Home />
      </View>
    </ImageBackground>
  );
}
