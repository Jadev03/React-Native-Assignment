import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CounterScreen() {
  const [counter, setCounter] = useState(0);

  
  useEffect(() => {
    const loadCounter = async () => {
      const savedCounter = await AsyncStorage.getItem('count');
      if (savedCounter !== null) {
        setCounter(parseInt(savedCounter, 10)); 
      }
    };
    loadCounter();
  }, []);

  
  useEffect(() => {
    AsyncStorage.setItem('count', counter.toString());
  }, [counter]);

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <TouchableOpacity style={[styles.button, styles.minusButton]} onPress={() => setCounter(counter - 1)}>
          <Text style={styles.buttonText}>-1</Text>
        </TouchableOpacity>
        <Text style={styles.counterText}>{counter}</Text>
        <TouchableOpacity style={[styles.button, styles.plusButton]} onPress={() => setCounter(counter + 1)}>
          <Text style={styles.buttonText}>+1</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={() => setCounter(0)}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  counterText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  plusButton: {
    backgroundColor: '#28a745',
  },
  minusButton: {
    backgroundColor: '#dc3545', 
  },
  resetButton: {
    backgroundColor: '#007bff', 
    marginTop: 20,
    width: 120, 
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

