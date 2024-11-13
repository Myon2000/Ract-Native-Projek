import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NextPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have reached the Next Page!</Text>
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
  },
});

export default NextPage;
