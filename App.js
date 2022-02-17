import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Player, Recorder, MediaStates } from '@react-native-community/audio-toolkit';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenue sur l'application du projet musique 2021/2022</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#52c52d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
