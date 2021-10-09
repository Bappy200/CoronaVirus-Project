import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import ContuctDoctor from "../ContuctDoctor/ContuctDoctor";
import CoronaDetails from "../CoronaDetails/CoronaDetails";
import Home from "../Home/Home";
import Information from '../Information/Information';
import screenOptions from "./screenOptions ";
export default function TabNavigator() {
    const Tab = createBottomTabNavigator();
    Tab.Navigator.defaultProps={headerShown: false}
    return (
        <Tab.Navigator
        
        screenOptions={({route}) => ({
            tabBarIcon: ({color}) => screenOptions(route, color),
          })}
        >
            <Tab.Screen name='Home' component={Home} options={{
            headerTitle:false,
          }}/>
            <Tab.Screen name='CoronaDetails' component={CoronaDetails}/>
            <Tab.Screen name='ContuctDoctor' component={ContuctDoctor}/>
            <Tab.Screen name='Information' component={Information}/>
        </Tab.Navigator>
    )
}
