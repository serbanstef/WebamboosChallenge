import React from 'react';
import {View, StyleSheet} from 'react-native';
import FiltersSection from '../filters/FiltersSection';
import {FromTopTrainersList, AllCoursesList} from '../coursesLists';

const CoursesScene = () => {
  return (
    <View style={styles.scene}>
      <FiltersSection />
      <FromTopTrainersList />
      <AllCoursesList />
    </View>
  );
};

export default CoursesScene;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
});
