import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../profile/Profile';
import Education from '../education/Education';
import Summary from '../summary/Summary';

const Stack = createStackNavigator();
const ReactNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Profile'}
          component={Profile}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name={'Education'}
          component={Education}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name={'Summary'}
          component={Summary}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default ReactNavigator;
