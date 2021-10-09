import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabNavigator from './TabNavigator';

function RootNavigator () {
    return (
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    )
}

export default RootNavigator 
