import React from 'react';
import {View, StyleSheet} from 'react-native';
import FiltersSection from '../filters/FiltersSection';
import UserAvatar from '../UserAvatar';
import SignalStrength from '../SignalStrength'

const CoursesScene = () => {
  return (
    <View style={[styles.scene, {backgroundColor: '#EEEEEE'}]} >
      <FiltersSection />
      <SignalStrength />
    </View>)
};

export default CoursesScene;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
