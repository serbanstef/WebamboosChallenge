import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

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
