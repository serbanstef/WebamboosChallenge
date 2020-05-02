import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CourseUserIcons = ({numberOfusers = 1, size = 20}) => {
  switch (numberOfusers) {
    case 1:
      return (
        <Icon
          name={'account'}
          size={size}
          color={'#4C94F6'}
          style={{bottom: 3, marginHorizontal: 4}}
        />
      );
    case 2:
      return (
        <Icon
          name={'account-multiple'}
          size={size}
          color={'#4C94F6'}
          style={{bottom: 2, marginHorizontal: 4}}
        />
      );
    case 3:
      return (
        <View style={{flexDirection: 'row', marginHorizontal: 4}}>
          <Icon
            name={'account'}
            size={size}
            color={'#4C94F6'}
            style={{bottom: 3}}
          />
          <Icon
            name={'account-multiple'}
            size={size + 2}
            color={'#4C94F6'}
            style={{bottom: 3, left: 4}}
          />
        </View>
      );
    default:
      break;
  }
};

export default CourseUserIcons;
