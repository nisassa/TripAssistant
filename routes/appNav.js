import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppHomeScreen from '../screens/home/main';
import AppTripsScreen from '../screens/trips';
import AppOthersScreen from '../screens/others';

const Tab = createBottomTabNavigator();

function AppMainNav () {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName="Home"
                screenOptions={ ({ route}) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = 'ios-home';
                        } else if (route.name === 'Others') {
                            iconName = focused ? 'ios-list-box' : 'ios-list';
                        } else if (route.name === 'Trips') {
                            iconName = 'ios-briefcase';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                   
                })}
                >
                <Tab.Screen name="Trips" component={AppTripsScreen} />
                <Tab.Screen name="Home" component={AppHomeScreen} />
                <Tab.Screen name="Others" component={AppOthersScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppMainNav;