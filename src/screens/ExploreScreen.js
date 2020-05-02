import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import GradientStatusBar from '../components/GradientStatusBar';
import SearchBar from '../components/searchbar/SearchBar';
import TopNavBar from '../components/topnavbar/TopNavBar';

const ExploreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <GradientStatusBar />
      <ScrollView>
        <SearchBar />
        <TopNavBar />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
