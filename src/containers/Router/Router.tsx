import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainHome from '../../screens/MainHome';

export type RootStackParamList = {
  MainHome: any;
};

const Stack = createStackNavigator<RootStackParamList>();

export interface RouterProps {}

const Router: React.FC<RouterProps> = (props: RouterProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainHome" component={MainHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
