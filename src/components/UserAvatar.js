import React from 'react';
import {View, StyleSheet} from 'react-native';
import Avatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';


const UserAvatar = () => {
  return (
    <View style={styles.container}>
      <Avatar
        size={64}
        name="Michelle Hunt"
        src="https://srv-file14.gofile.io/download/MCHVO5/download.png"
        style={{width: 69, height: 69, backgroundColor: 'rgba(235, 235, 235, 0.63)'}}
      />
      <View style={{width: 25, height: 25, borderRadius: 25/2, position: 'absolute', top: 0, right: 0, backgroundColor: '#4C94F5', elevation: 3, alignItems: 'center', justifyContent: 'center'}}>
      <Icon name="star" size={20} color={'white'} />
      </View>
    </View>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    //backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
