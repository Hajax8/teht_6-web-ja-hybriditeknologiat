import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native';
import Position from './components/Position';

export default function App() {

  useEffect(() => {
    
  }, [])

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.heading}>Current weather</Text>
        <Position/>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4b4b4b',
  },
  field: {
    borderColor: '#565656',
    backgroundColor: '#676767',
    color: 'white',
    textAlign: 'left',
    padding: 5,
    justifyContent: 'flex-start',
    width: 100,
  },
  heading: {
    marginTop:50,
    padding: 9,
    fontSize: 20,
    fontWeight: 'bold'
  },
});
