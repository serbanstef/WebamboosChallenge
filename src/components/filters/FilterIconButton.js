import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SingleFilter = props => {
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: selected ? '#4C94F6' : '#ffffff'},
      ]}
      onPress={() => setSelected(!selected)}>
      <Icon
        name="filter-outline"
        size={25}
        color={selected ? '#ffffff' : 'black'}
      />
    </TouchableOpacity>
  );
};

export default SingleFilter;

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    borderRadius: 5,
    elevation: 1,
  },
});
