import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import GradientStatusBar from '../components/GradientStatusBar';

export default function WorkInProgress() {
  return (
    <>
      <View style={styles.container}>
        <Text>Work in progress...</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
