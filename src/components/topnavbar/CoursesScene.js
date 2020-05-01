import React from 'react';
import {View, StyleSheet} from 'react-native';
import FiltersSection from '../filters/FiltersSection'

const CoursesScene = () => {
  return (
    <View style={[styles.scene, {backgroundColor: '#EEEEEE'}]} >
      <FiltersSection />
    </View>)
};

export default CoursesScene;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
