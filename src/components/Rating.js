import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Rating = ({height = 20, rating = 1}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Icon
        name={rating >= 1 ? 'star' : 'star-outline'}
        size={height}
        color={'#F7B634'}
      />
      <Icon
        name={rating >= 2 ? 'star' : 'star-outline'}
        size={height}
        color={'#F7B634'}
      />
      <Icon
        name={rating >= 3 ? 'star' : 'star-outline'}
        size={height}
        color={'#F7B634'}
      />
      <Icon
        name={rating >= 4 ? 'star' : 'star-outline'}
        size={height}
        color={'#F7B634'}
      />
      <Icon
        name={rating >= 5 ? 'star' : 'star-outline'}
        size={height}
        color={'#F7B634'}
      />
    </View>
  );
};

export default Rating;
