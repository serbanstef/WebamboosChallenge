import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchItem = ({searchString, removeFunction}) => {
  const handleRemoveButtonPress = () => removeFunction();

  return (
    <View style={styles.container}>
      <View style={styles.searchStringContainer}>
        <Text style={{color: 'white', fontSize: 13}}>{searchString}</Text>
      </View>
      <TouchableWithoutFeedback onPress={handleRemoveButtonPress}>
        <View
          style={{
            position: 'absolute',
            height: 15,
            width: 15,
            backgroundColor: '#f72a2a',
            borderRadius: 45,
            right: -1,
            top: -5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="close" size={9} color={'white'} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  container: {
    height: '55%',
    marginHorizontal: 3,
    top: 1,
  },
  searchStringContainer: {
    borderRadius: 20,
    backgroundColor: '#0f94db',
    height: '100%',
    //justifyContent: 'center',
    paddingHorizontal: 10,
  },
});