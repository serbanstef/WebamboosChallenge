import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

const TabBarIcon = ({name, isFocused}) => (
  <FeatherIcon
    name={name}
    color={isFocused ? '#F7B632' : 'white'}
    size={23}
    style={{bottom: 5}}
  />
);

export default TabBarIcon;
