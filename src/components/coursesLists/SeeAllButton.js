import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const seeAllButton = ({onPress}) => {
  const handleOnPress = () => onPress();

  return (
    <TouchableOpacity style={styles.button} onPress={() => handleOnPress()}>
      <Text>SEE ALL 10</Text>
    </TouchableOpacity>
  );
};

export default seeAllButton;

const styles = StyleSheet.create({
  button: {
    height: 40,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 25,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
