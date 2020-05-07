import React from 'react';
import WorkInProgress from '../components/WorkInProgress';
import GradientStatusBar from '../components/GradientStatusBar';
import { Text } from 'react-native';

export default function HomeScreen() {
  return (
    <>
      <GradientStatusBar />
      <WorkInProgress />
    </>
  );
}
