import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './components/LoginPage';
import DeliveringPage from './components/DeliveringPage';
import ScanPage from './components/ScanPage';
import MoneyPage from './components/MoneyPage';
import MessagePage from './components/MessagePage';

// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="DeliveringPage" component={DeliveringPage} />
        <Stack.Screen name="ScanPage" component={ScanPage} />
        <Stack.Screen name="MessagePage" component={MessagePage} />
        <Stack.Screen name="MoneyPage" component={MoneyPage} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;