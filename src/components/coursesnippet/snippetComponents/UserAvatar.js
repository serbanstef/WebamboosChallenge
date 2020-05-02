import React from 'react';
import {View, StyleSheet} from 'react-native';
import Avatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserAvatar = ({
  starred = false,
  name = 'Placeholder Name',
  imagesrc = 'https://00e9e64bacb1f983f92f8f8494d80244ce5f3d49fcb4dd6676-apidata.googleusercontent.com/download/storage/v1/b/taxi-14f32.appspot.com/o/avatar.png?qk=AD5uMEtcJR4OH1-qA7fFBjrZtrhjO0ZOz9cokv9Evof6zqXJmnjSGE1nPqLh4MGnCLbUOJM3agl6qz6jQi1N0wmeNlje7hiNdxylh4DEgQzYGnvwoU-6a21_h8fpjKo0ZtT5_ekFzzEony0VPYx6MuEQhuDtyO_iIB4OAxpMCeAkeweiOStn97t4-tK6EHCVyvQ5Kw7nIkYul1Zv6vluRgwoo4NLYJ6tGThQ7Bksdp0z8pTO0ebtlF9iULcSWYjzwz-Z-GrV5xKCPONXwPrKofBMc1-ChtEbzyZefKNgKIzSQRfCWP-nyJOpKFH-gh9zmLmci8WbeOTZlH-DwffWIBITItkAGKkA_9K5t0dA8SfUpWAMUA-XBHI8ENX1J5hl6kxDKUU9LuZ0q20AvhXMjI5TIFRlcM42D3vYjC-rCu_PBMQxYBgPXYBbXboRRvnm-ecsr9IQxbRr_WdrdTXKiUW7tS4txm9fEyiNLfLNZmFv7wQbcrpSfIhfFKI4LHWJl58Fw3FnY9JNPiQBYhiSYfJYlI3-B843nRAb-Lmrec0jLK2O70lIXoAzuvN_LupnYz25henu-clcYHgP3LfE06VBGQH4tvAyodChI-ZYEuiwyhn5CNKNWaSZLMyemeHo7f1vu1FCaJXf7MJY7YknHqm1zUukR_sGM7txGaLkNWnQtvwq6mgS4duorcPo8iQsHSIQ-LsZEb149e1oF0eOTh_MCZCnEjuI_VhqfZE1voMPQf7keZCqI3LfQUd6FYBnrkCAaJM92vM5Nzgx6N-MyJxxXtmEsgZG2GLZuHyOhZn7aIyBVzjxOqI&isca=1',
}) => {
  return (
    <View style={styles.container}>
      <Avatar size={64} name={name} src={imagesrc} style={styles.avatar} />
      <View
        style={[
          styles.starcontainer,
          {
            backgroundColor: starred ? '#4C94F5' : 'rgba(77, 149, 245, 0.58)',
            elevation: starred ? 3 : 0,
          },
        ]}>
        <Icon
          name={starred ? 'star' : 'star-border'}
          size={20}
          color={'white'}
        />
      </View>
    </View>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  container: {
    height: 75,
    width: 75,
    //backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 69,
    height: 69,
    backgroundColor: 'rgba(235, 235, 235, 0.63)',
  },
  starcontainer: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    position: 'absolute',
    top: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
