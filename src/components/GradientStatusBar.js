import React from 'react';
import {StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientStatusBar = () => {
  return (
    <>
      <StatusBar translucent={true} backgroundColor={'rgba(0,0,0,0)'} />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#3b6be3', '#113799']}
        style={{height: StatusBar.currentHeight}}
      />
    </>
  );
};

export default GradientStatusBar;
