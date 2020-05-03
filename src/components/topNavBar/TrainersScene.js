import React from 'react';
import {View, StyleSheet} from 'react-native';
import WorkInProgress from '../WorkInProgress';

const TrainersScene = () => {
  return (
    <View style={styles.scene}>
      <WorkInProgress />
    </View>
  );
};

export default TrainersScene;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: 'white',
  },
});
