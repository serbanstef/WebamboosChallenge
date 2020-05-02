import React from 'react';
import {View, StyleSheet} from 'react-native';
import Avatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserAvatar = ({
  starred = false,
  name = 'Placeholder Name',
  imagesrc = 'https://srv-file14.gofile.io/download/MCHVO5/download.png',
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
