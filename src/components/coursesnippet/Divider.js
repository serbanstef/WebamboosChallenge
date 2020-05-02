import React from 'react';
import {View, useWindowDimensions} from 'react-native';

const Divider = ({padding = 15}) => {
  return (
    <View style={{flexDirection: 'row', height: 1}}>
      <View style={{width: padding, height: 2, backgroundColor: 'white'}} />
      <View
        style={{
          width: useWindowDimensions().width - padding*2,
          backgroundColor: '#F1F1F1',
        }}
      />
      <View style={{width: padding, height: 2, backgroundColor: 'white'}} />
    </View>
  );
};

export default Divider;
