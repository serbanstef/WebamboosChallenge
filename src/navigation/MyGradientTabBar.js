import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TabBarIcon from './TabBarIcon';

//React navigation bottom navigator doesn't support a gradient background by default.
//Therefore a custom TabBar component was needed.

function MyGradientTabBar({state, descriptors, navigation}) {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#0A6EF2', '#0929C0']}
      style={[styles.container]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const selectIcon = () => {
          switch (label) {
            case 'Home':
              return <TabBarIcon name={'home'} isFocused={isFocused} />;
            case 'Explore':
              return <TabBarIcon name={'compass'} isFocused={isFocused} />;
            case 'Messages':
              return <TabBarIcon name={'message-square'} isFocused={isFocused} />;
            case 'Saved':
              return <TabBarIcon name={'star'} isFocused={isFocused} />;
            case 'Profile':
              return <TabBarIcon name={'user'} isFocused={isFocused} />;
            default:
              return <TabBarIcon name={'home'} isFocused={isFocused} />;
          }
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.button}>
            {selectIcon()}
            <Text
              style={{color: isFocused ? '#F7B632' : 'white', ...styles.text}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </LinearGradient>
  );
}

export default MyGradientTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 52,
    alignItems: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
  },
  text: {
    fontSize: 11,
    fontWeight: 'bold',
    bottom: 3,
  },
});
