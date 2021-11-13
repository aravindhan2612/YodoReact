import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1}>Hello Aravind entering longer text to see propeties if the text view in react native Hello Aravind entering longer text to see propeties if the text view in react native </Text>
      <Image 
      blurRadius={0}
      fadeDuration={5000}
      source={{
        width:200,height:200,
        uri:"https://picsum.photos/200"}}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33FFD5',
    justifyContent:"center",
    alignItems:"center"
  },
});
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];
