import React from 'react';
import {View} from 'react-native';

const SignalStrength = ({size = 20, signalStrength = 1}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        flexDirection: 'row',
        alignItems: 'flex-end',
      }}>
      <View
        style={{
          backgroundColor: signalStrength >= 1 ? '#4C94F6' : '#B1B1B1',
          width: '14%',
          height: '25%',
          elevation: (size / 100) * 3,
        }}
      />
      <View style={{width: '14%', height: 1}} />
      <View
        style={{
          backgroundColor: signalStrength >= 2 ? '#4C94F6' : '#B1B1B1',
          width: '14%',
          height: '50%',
          elevation: (size / 100) * 3,
        }}
      />
      <View style={{width: '14%', height: 1}} />
      <View
        style={{
          backgroundColor: signalStrength >= 3 ? '#4C94F6' : '#B1B1B1',
          width: '14%',
          height: '75%',
          elevation: (size / 100) * 3,
        }}
      />
      <View style={{width: '14%', height: 1}} />
      <View
        style={{
          backgroundColor: signalStrength >= 4 ? '#4C94F6' : '#B1B1B1',
          width: '13%',
          height: '100%',
          elevation: (size / 100) * 3,
        }}
      />
    </View>
  );
};

export default SignalStrength;
