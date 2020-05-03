import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Rating,
  SignalStrength,
  Avatar,
  Divider,
  CourseUserIcons,
} from './snippetComponents';

const CourseSnippet = ({
  withSeparator,
  courseTitle,
  trainerName,
  courseCategory,
  signalStregth,
  users,
  rating,
  views,
  price,
  starred,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Avatar name={trainerName} starred={starred} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{courseTitle}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 12}}>{trainerName}</Text>
            <Icon name={'circle-small'} size={16} color={'black'} />
            <Text style={{fontSize: 12}}>{courseCategory}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <SignalStrength signalStrength={signalStregth} size={16} />
            <CourseUserIcons numberOfusers={users} size={22} />
            <Rating rating={rating} size={12} />
            <Text>{views}</Text>
          </View>
        </View>
        <Text style={styles.price}>{`${price}£`}</Text>
      </View>
      {withSeparator && <Divider />}
    </>
  );
};

export default CourseSnippet;

CourseSnippet.defaultProps = {
  withSeparator: true,
  courseTitle: 'Usability Testing',
  trainerName: 'Michelle Hunt',
  courseCategory: 'UX Designer',
  signalStregth: 2,
  users: 3,
  rating: 3,
  views: '14',
  price: '45',
  starred: false,
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    flexDirection: 'row',
    paddingTop: 15,
  },
  price: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    position: 'absolute',
    right: 15,
    bottom: 18,
  },
  detailsContainer: {
    left: 10,
    top: 6,
  },
  title: {
    fontSize: 17,
    fontFamily: 'Roboto-Medium',
  },
});
