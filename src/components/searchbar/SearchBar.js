import React, {useEffect, useState, useRef} from 'react';
import {View, TextInput, ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import SearchItem from './SearchItem';

const SearchBar = () => {
  const [searchItems, setSearchItems] = useState([]);
  const textInputRef = useRef();

  const addSearchItems = item => {
    setSearchItems([...searchItems, item]);
    textInputRef.current.clear();
  };

  const removeSearchItem = itemToBeRemoved =>
    setSearchItems(searchItems =>
      searchItems.filter(existingItem => existingItem !== itemToBeRemoved),
    );

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#3b6be3', '#113799']}
      style={styles.container}>
      <View style={styles.searchInputContainer}>
        <Icon name="search" size={20} color={'grey'} style={{marginLeft: 7}} />

        {searchItems.map(searchString => (
          <SearchItem
            key={searchString}
            searchString={searchString}
            removeFunction={() => removeSearchItem(searchString)}
          />
        ))}
        <TextInput
          ref={textInputRef}
          placeholder={'Search...'}
          onSubmitEditing={event => addSearchItems(event.nativeEvent.text)}
          style={{height: 40}}
        />
      </View>
    </LinearGradient>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  searchInputContainer: {
    height: '65%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
