import React from 'react';
import {View, StyleSheet} from 'react-native';
import FiltersSection from '../filters/FiltersSection';
import UserAvatar from '../UserAvatar';

const CoursesScene = () => {
  return (
    <View style={[styles.scene, {backgroundColor: '#EEEEEE'}]} >
      <FiltersSection />
      <UserAvatar />
    </View>)
};

export default CoursesScene;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
