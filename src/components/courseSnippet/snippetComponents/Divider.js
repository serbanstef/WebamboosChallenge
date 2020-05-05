import React from 'react';
import {View, useWindowDimensions, StyleSheet} from 'react-native';

const Divider = ({padding = 15}) => {
  return (
    <View style={styles.container}>
      <View style={{...styles.edges, width: padding}} />
      <View
        style={{
          ...styles.divider,
          width: useWindowDimensions().width - padding * 2,
        }}
      />
      <View style={{...styles.edges, width: padding}} />
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 1,
  },
  edges: {
    height: 2,
    backgroundColor: 'white',
  },
  divider: {
    backgroundColor: '#F1F1F1',
  },
});
