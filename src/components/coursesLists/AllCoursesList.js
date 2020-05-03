import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CourseSnippet from '../courseSnippet';
import {allCourses} from './mockData';

//Uses mock data. Normally the data would have been fetched from an API and stored in state.
//Used a basic .map method to create the list. For larger lists the React Native <Flatlist> component could be considered.

const AllCoursesList = () => {
  return (
    <View style={{width: '100%', backgroundColor: 'white', marginTop: 15}}>
      <Text style={styles.title}>All courses</Text>
      {allCourses.map((course, index, array) => (
        <CourseSnippet
          key={course.id}
          withSeparator={index !== array.length - 1 ? true : false}
          courseTitle={course.courseTitle}
          trainerName={course.trainerName}
          courseCategory={course.courseCategory}
          signalStregth={course.signalStregth}
          users={course.users}
          rating={course.rating}
          views={course.views}
          price={course.price}
          starred={course.starred}
        />
      ))}
    </View>
  );
};

export default AllCoursesList;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    left: 15,
    marginVertical: 15,
  },
});
