import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

const SimpleFilter = ({filterTitle}) => {
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: selected ? '#4C94F6' : '#ffffff',
          paddingHorizontal: useWindowDimensions().width / 17,
        },
      ]}
      onPress={() => setSelected(!selected)}>
      <Text style={{color: selected ? 'white' : 'black'}}>{filterTitle}</Text>
    </TouchableOpacity>
  );
};

export default SimpleFilter;

const styles = StyleSheet.create({
  container: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginLeft: 10,
    borderRadius: 5,
    elevation: 1,
  },
});
