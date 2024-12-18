// screens/LoginPage.js
import React, { useState } from 'react';
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { auth } from '../../config/firebase_config';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  console.log('LoginPage rendered');

  const handleLogin = () => {
    if (username === 'Vian' && password === '12345') {
      setAlertMessage("Anda berhasil login");
      navigation.navigate('NextPage');
    } else {
      setAlertMessage("Anda gagal login");
    }
  };
  

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <Image source={require('../../assets/sogol.jpg')} style={{ width: 100, height: 100, marginBottom: 20 }} />
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 10 }}>LOGIN</Text>
        <View style={{ gap: 7, alignItems: 'center' }}>
          {alertMessage ? <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'red', fontSize: 20, marginBottom: 10 }}>{alertMessage}</Text> : null}

          <Text>Username</Text>
          <TextInput style={{ borderWidth: 2, borderColor: 'black', padding: 5, width: 250, borderRadius: 30 }} placeholder="Masukkan Username" onChangeText={(text) => setUsername(text)} />

          <View style={{ gap: 4 }}>
            <Text>Password</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TextInput style={{ borderWidth: 2, borderColor: 'black', padding: 5, width: 200, borderRadius: 30 }} placeholder="Masukkan Password" secureTextEntry={!showPassword} onChangeText={(text) => setPassword(text)} />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image source={showPassword ? require('../../assets/eye.png') : require('../../assets/eye_close.png')} style={{ width: 30, height: 30, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: 'lightblue', padding: 5, borderRadius: 10, width: 80, alignItems: 'center', marginTop: 10 }}>
            <Text style={{ color: 'white' }}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('RegisterPage')}>
            <Text style={{ color: 'blue', marginTop: 15 }}>Belum punya akun? Buat akunmu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
