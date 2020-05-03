import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CourseSnippet from '../courseSnippet';
import SeeAllButton from './SeeAllButton';
import {coursesFromTopTrainers} from './mockData';

//Uses mock data. Normally the data would have been fetched from an API and stored in state.
//Used a basic .map method to create the list. For larger lists the React Native <Flatlist> component could be considered.

const fromTopTrainersList = () => {
  const [visibleCourses, setVisibleCourses] = useState(3);

  const handleSeeAllButtonPress = () => setVisibleCourses(10);

  return (
    <View style={{width: '100%', backgroundColor: 'white'}}>
      <Text style={styles.title}>From top trainers</Text>
      {coursesFromTopTrainers
        .slice(0, visibleCourses)
        .map((course, index, array) => (
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
      {visibleCourses == 3 && (
        <SeeAllButton onPress={() => handleSeeAllButtonPress()} />
      )}
    </View>
  );
};

export default fromTopTrainersList;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    left: 15,
    marginVertical: 15,
  },
});
