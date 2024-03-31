import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome,FontAwesome5 } from '@expo/vector-icons';

import HomeNavigator from './HomeNavigator';
import { TouchableOpacity } from 'react-native';


const Tab = createBottomTabNavigator();

function RootNavigator() {

    const CustomTabBarButton = ({children}) => {
        return(
            <TouchableOpacity 
            style={{
                width: 55,
                height: 55,
                backgroundColor: '#5C3EBC',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 33,
                marginTop: -10,
                borderWidth: 3,
                borderColor: '#fff',
            }}
            >
                <Entypo name="list" size={24} color='#FFD00C' />
            </TouchableOpacity>
        )
    }

    return(
            <Tab.Navigator initialRouteName='Ana Sayfa' screenOptions={{
                tabBarHideOnKeyboard : true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#5D3EBD', 
                tabBarInactiveTintColor: '#6E7480',
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                },
            }}> 
                <Tab.Screen 
                name='Ana Sayfa' 
                component={HomeNavigator} 
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name="home" size={24} color={color} />
                    )
                }}
                />
                 <Tab.Screen 
                name='Search' 
                component={HomeNavigator} 
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="search" size={24} color={color} />
                    )
                }}
                />

                <Tab.Screen 
                name='List'
                component={HomeNavigator}
                options={{
                    tabBarButton: (props) => <CustomTabBarButton {...props} />
                }}
                />

                 <Tab.Screen 
                name='User' 
                component={HomeNavigator} 
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="user" size={24} color={color} />
                    )
                }}
                />
                 <Tab.Screen 
                name='Gift' 
                component={HomeNavigator} 
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome5 name="gift" size={24} color={color} />
                    )
                }}
                />
            </Tab.Navigator>
    )
    
}

export default RootNavigator;