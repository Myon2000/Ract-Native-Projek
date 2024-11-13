import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastAndroid, View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../config/firebase_config';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigation = useNavigation();

  const handleRegister = () => {
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setAlertMessage("Password and confirmation password do not match.");
      return;
    }

    // Reset alert message
    setAlertMessage('');

    // Proceed with registration
    createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        ToastAndroid.show("Anda berhasil membuat akun", ToastAndroid.LONG);
        
        // Redirect to LoginPage after successful registration
        navigation.navigate('LoginPage');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        ToastAndroid.show("Anda gagal membuat akun", ToastAndroid.SHORT);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      {alertMessage ? <Text style={styles.alert}>{alertMessage}</Text> : null}

      <Text>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Username"
        onChangeText={(text) => setUsername(text)}
      />

      <Text>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Masukkan Password"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image
            source={showPassword ? require('../../assets/eye.png') : require('../../assets/eye_close.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <Text>Konfirmasi Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Masukkan Konfirmasi Password"
          secureTextEntry={!showConfirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Image
            source={showConfirmPassword ? require('../../assets/eye.png') : require('../../assets/eye_close.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleRegister} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  alert: {
    color: 'red',
    marginBottom: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 5,
    width: 250,
    borderRadius: 30,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 30,
    width: 250,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
