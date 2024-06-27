import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.PRIMERY }}>
            <Tabs.Screen name='home'
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />
                }}
            />
            <Tabs.Screen name='explore'
                options={{
                    tabBarLabel: 'explore',
                    tabBarIcon: ({ color }) => <MaterialIcons name="explore" size={24} color={color} />
                }}
            />
            <Tabs.Screen name='profile'
                options={{
                    tabBarLabel: 'User',
                    tabBarIcon: ({ color }) => <FontAwesome6 name="circle-user" size={24} color={color} />
                }}
            />
        </Tabs>
    )
}