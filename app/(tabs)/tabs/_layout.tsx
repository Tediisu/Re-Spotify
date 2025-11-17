import { Tabs } from "expo-router";
import React from "react";
import "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// export default function Layout() {
//   return (
//     <Tabs
//       initialRouteName="home"
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: {
//           height: 60,        
//           paddingBottom: 10, 
//           paddingTop: 5,
//         },
//         tabBarLabelStyle: {
//           fontSize: 10      
//         },
//       }}
//     >
//       <Tabs.Screen
//         name="home"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color, size }) => (
//             <Octicons name="home" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="search"
//         options={{
//           title: "Search",
//           tabBarIcon: ({ color, size }) => (
//             <Octicons name="search" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="yourLibrary"
//         options={{
//           title: "Your Library",
//           tabBarIcon: ({ color, size }) => (
//             <Octicons name="book" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="create"
//         options={{
//           title: "Create",
//           tabBarIcon: ({ color, size }) => (
//             <Octicons name="plus" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{ href: null}}
//       />
//     </Tabs>
//   );
// }
export default function Layout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
          paddingTop: 5,
          backgroundColor: "#161616", 
          borderTopWidth: 0,              
          elevation: 0,                   
        },
        tabBarLabelStyle: {
          fontSize: 10
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="yourLibrary"
        options={{
          title: "Your Library",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="book" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="plus" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{ href: null }}
      />
      <Tabs
      initialRouteName="playlist"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 10
        },
      }}
    ></Tabs>
    </Tabs>
    
    
  );
}
