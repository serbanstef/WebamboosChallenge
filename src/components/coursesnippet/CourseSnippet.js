import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Rating,
  SignalStrength,
  Avatar,
  Divider,
  CourseUserIcons,
} from '../coursesnippet';

const CourseSnippet = ({
  withSeparator = true,
  courseTitle = 'Usability Testing',
  trainerName = 'Michelle Hunt',
  courseCategory = 'UX Designer',
  signalStregth = 2,
  users = 3,
  rating = 3,
  views = '14',
  price = '45',
  starred = false,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Avatar name={trainerName} starred={starred} />
        <View style={{left: 10, top: 6}}>
          <Text style={{fontSize: 17, fontFamily: 'Roboto-Medium'}}>
            {courseTitle}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 12}}>{trainerName}</Text>
            <Icon name={'circle-small'} size={20} color={'black'} />
            <Text>{courseCategory}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <SignalStrength signalStrength={signalStregth} size={16} />
            <CourseUserIcons numberOfusers={users} size={22} />
            <Rating rating={rating} size={12} />
            <Text>{views}</Text>
          </View>
        </View>
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 16,
            position: 'absolute',
            right: 15,
            bottom: 23,
          }}>
          45£
        </Text>
      </View>
      {withSeparator && <Divider />}
    </>
  );
};

export default CourseSnippet;

const styles = StyleSheet.create({
  container: {
    height: 109,
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    flexDirection: 'row',
    paddingTop: 15,
  },
});
