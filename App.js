
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Search from './screens/Search'
import Home from './screens/Home'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()
const App= () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      <NavigationContainer>
        <Tab.Navigator
         screenOptions={({route})=>({
           tabBarIcon:({color})=>{
             let iconName;
             if(route.name==="Home"){
               iconName = 'home-city-outline'
             }else if(route.name==="Search"){
               iconName = "city"
             }
             return <Icons name={iconName} size={25} color={color} />
           },
           tabBarActiveTintColor:"white",
           tabBarInactiveTintColor:"gray",
           tabBarActiveBackgroundColor:"#00aaff",
           tabBarInactiveBackgroundColor:"#00aaff"
         })}
        >
          <Tab.Screen name="Home" component={Home} 
           initialParams={{city:"london"}}
          />
          <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
      </NavigationContainer>
   </>
  );
};


export default App;
