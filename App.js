import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginPage from './components/LoginPage';
import DeliveringPage from './components/DeliveringPage';
import ScanPage from './components/ScanPage';
import MoneyPage from './components/MoneyPage';
import MessagePage from './components/MessagePage';
import MapPage from './components/MapPage';

import { AntDesign, FontAwesome6, SimpleLineIcons, Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import SidePanel from './components/SidePanel';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DeliveryStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
    <Stack.Screen name="DeliveringPage" component={DeliveringPage} />
    <Stack.Screen name="MapPage" component={MapPage} />
  </Stack.Navigator>
)

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Tab.Screen
      name="DeliveringStack"
      component={DeliveryStack}
      options={{
        tabBarLabel: 'Delivery',
        tabBarIcon: ({ color, size }) => (
          <Feather name="box" size={size} color={color} />
        )
      }}
    />
    <Tab.Screen
      name="Scan"
      component={ScanPage}
      options={{
        tabBarLabel: 'Scan',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="scan1" size={size} color={color} />
        )
      }} />
    <Tab.Screen
      name="MessagePage"
      component={MessagePage}
      options={{
        tabBarLabel: 'Message',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="message1" size={size} color={color} />
        )
      }} />
    <Tab.Screen
      name="MoneyPage"
      component={MoneyPage}
      options={{
        tabBarLabel: 'Income',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="dollar" size={size} color={color} />
        )
      }}
    />
  </Tab.Navigator>
)

const DrawerWrapper = () => (
  <Drawer.Navigator
    initialRouteName="MainStack"
    drawerContent={(props) => <SidePanel {...props} />}
    screenOptions={{
      drawerStyle: {
        width: '60%'
      }
    }}
  >
    <Drawer.Screen name="MainStack" component={MainTabs} options={{ headerShown: false }} />
  </Drawer.Navigator>
)

const App = () => {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="MainStack" drawerContent={(props) => <SidePanel {...props} />}>
    //     <Drawer.Screen name="MainStack" component={MainStack} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Main" component={DrawerWrapper} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;