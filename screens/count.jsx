import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Count = ({ navigation }) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount === 10) {
        navigation.navigate('NextPage');
        
      }
      return newCount;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="Count" onPress={handleCount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Count;
