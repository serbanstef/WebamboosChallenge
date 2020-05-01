import * as React from 'react';
import {Dimensions, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import CoursesScene from './CoursesScene';
import TrainersScene from './TrainersScene';

const initialLayout = {width: Dimensions.get('window').width};

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'courses', title: 'COURSES'},
    {key: 'trainers', title: 'TRAINERS'},
  ]);

  const renderScene = SceneMap({
    courses: CoursesScene,
    trainers: TrainersScene,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={{backgroundColor: '#FFD54F'}}
          style={{backgroundColor: 'white'}}
          renderLabel={({route, focused, color}) => (
            <Text
              style={{
                color: focused ? '#FFD54F' : '#9E9E9E',
                margin: 8,
                fontSize: 16,
              }}>
              {route.title}
            </Text>
          )}
        />
      )}
    />
  );
}
