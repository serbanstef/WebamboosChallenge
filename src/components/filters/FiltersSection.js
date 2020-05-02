import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import SimpleFilter from './SimpleFilter';
import PickerFilter from './PickerFilter';
import FilterIconButton from './FilterIconButton';

const FiltersSection = () => {
  const [simpleFilters] = useState([
    'UI basics',
    'UX research',
    'Sketch app',
    'Lorem ipsum',
    'Lorem lorem',
  ]);

  const [pickerFilters] = useState([
    ['Comp. science', 'Comp.science 1', 'Comp. science 2'],
    ['Web design', 'Web design 1', 'Web design 2'],
  ]);

  return (
    <View>
      <View style={styles.dropdownFilters}>
        {pickerFilters.map(item => (
          <PickerFilter key={item[0]} values={item} />
        ))}
        <FilterIconButton />
      </View>
      <View style={styles.simpleFilters}>
        <ScrollView horizontal={true}>
          {simpleFilters.map(filter => (
            <SimpleFilter filterTitle={filter} key={filter} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default FiltersSection;

const styles = StyleSheet.create({
  dropdownFilters: {
    height: 75,
    width: '100%',
    //backgroundColor: '#e6e6e6',
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  simpleFilters: {
    height: 75,
    width: '100%',
    //backgroundColor: '#e6e6e6',
    paddingLeft: 5,
  },
});
