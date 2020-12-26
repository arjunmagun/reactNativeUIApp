import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import Home from "./Screens/HomeScreen";
import Profile from './Screens/Profile';
import SearchScreen from './Screens/SearchScreen';
import Post from './Screens/Post';
import Activity from './Screens/Activity';
import cameraScreen from "./Screens/cameraScreen";
import { StyleSheet } from 'react-native';
import { PhotoProvider } from './Context/clickedContext';
import CommentScreen from './Screens/CommentScreen';
import { CommentProvider } from './Context/commentContext';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ActivityStack = createStackNavigator();
const PostStack = createStackNavigator();

// Home Stack screen Starts here
const HomeStackScreen = () => (
  <HomeStack.Navigator >
    <HomeStack.Screen 
      name="Home" 
      component={Home} 
      options={{
          title: "Home",
          // headerRight:(props) => (
          //   <MaterialIcons 
          //     name="chat-bubble-outline" 
          //     size={25}
          //     style={styles.headerright}
          //     {...props}
          //     onPress={() => {
          //       alert("hello")
          //     }}
          //   />
          // ),
        }}
    />
    <HomeStack.Screen 
      name="Profile" 
      component={Profile}
    />
    <HomeStack.Screen 
      name="Comments" 
      component={CommentScreen}
    />
  </HomeStack.Navigator>
)

// Home Stack screen ends here


// Profile Stack screen Starts here
const ProfileStackScreen = () =>(
  <ProfileStack.Navigator >
    <ProfileStack.Screen
      name="Profile" 
      component={Profile} 
      options={{
        headerTintColor: "#cfd3ce",
        headerTransparent: true,
        headerStyle: {
          backgroundColor: "#cfd3ce"
        },
      }}

     />
  </ProfileStack.Navigator>
)
// Profile Stack screen ends here

// Activity Stack screen Starts here
const ActivityStackScreen = () =>(
  <ActivityStack.Navigator>
    <ActivityStack.Screen name="Activity" component={Activity} />
  </ActivityStack.Navigator>
)
// Activity Stack screen ends here

//Post Stack screen Starts here
const PostStackScreen = () => (
  <PostStack.Navigator headerMode="none">
    <PostStack.Screen name="Post" component={Post} />
    <PostStack.Screen name="CameraScreen" component={cameraScreen} />
  </PostStack.Navigator>
)

export default function App(){
  return(
  <PhotoProvider>
  <CommentProvider>
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName= "Home"
      tabBarOptions={{
        activeTintColor: '#222831',
        inactiveBackgroundColor: '#cfd3ce',
        activeBackgroundColor: '#cfd3ce'  
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStackScreen} 
        options={{
          tabBarIcon:({color, size})=>(
            <AntDesign name="home" color={color} size={size} />
          )
        }} 
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{
          tabBarIcon:({color, size})=>(
            <AntDesign name="search1" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name="Post" 
        component={PostStackScreen} 
        options={{
          tabBarIcon:({color, size})=>(
            <AntDesign name="plus" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name="Activity" 
        component={ActivityStackScreen} 
        options={{
          tabBarIcon:({color, size})=>(
            <AntDesign name="barschart" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileStackScreen} 
        options={{
          tabBarIcon:({color, size})=>(
            <AntDesign name="profile" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
  </CommentProvider>
  </PhotoProvider>
  )
}

const styles = StyleSheet.create({
  headerright: {
    paddingRight: 20
  },
})