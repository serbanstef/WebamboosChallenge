import React from 'react';
import {View, useWindowDimensions, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PickerFilter = ({values}) => {
  return (
    <View
      style={[
        styles.container,
        {width: useWindowDimensions().width / 2 - 15 - 15 - 20},
      ]}>
      <RNPickerSelect
        onValueChange={value => console.log(value)}
        useNativeAndroidPickerStyle={false}
        items={values.map(item => ({label: item, value: item}))}
        placeholder={{label: values[0]}}
        textInputProps={{
          style: {
            textAlign: 'center',
            color: 'black',
            marginRight: 10,
          },
        }}
        style={{
          placeholder: {
            color: 'black',
            textAlign: 'center',
          },
          iconContainer: {
            top: 0,
            right: 0,
          },
        }}
        Icon={() => (
          <Icon
            name="chevron-down"
            size={15}
            color={'black'}
            style={{top: 15, right: 8}}
          />
        )}
      />
    </View>
  );
};

export default PickerFilter;

const styles = StyleSheet.create({
  container: {
    height: 45,
    marginTop: 25,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 1,
  },
});
