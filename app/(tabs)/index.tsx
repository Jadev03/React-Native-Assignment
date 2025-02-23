import { router } from 'expo-router';
import React, { useState, useRef } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useAuthStore } from './store';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login=useAuthStore((state)=>state.login);

  // Define refs with proper type (TextInput | null)
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  const handleLogin = () => {
    if (!email.includes('@')) {
    
      emailRef.current?.focus();
      return;
    }
    if (password.length < 6) {
      
      passwordRef.current?.focus(); 
      return;
    }
    login();
    
    router.replace('/home');

    
    
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={emailRef}
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current?.focus()} 
      />
      <TextInput
        ref={passwordRef}
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        returnKeyType="done"
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});
