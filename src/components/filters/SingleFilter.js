import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SingleFilter = (props) => {
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity
      style={{
        height: 45,
        width: 45,
        backgroundColor: selected ? '#0f94db' : '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        borderRadius: 5,
        elevation: 1,
      }}
      onPress={() => setSelected(!selected)}>
      <Icon name="filter-outline" size={25} color={'black'} />
    </TouchableOpacity>
  );
};

export default SingleFilter;
