import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
    return (
        <Stack>
            <Stack.Screen name='login' options={{ headerTitle: '', headerShadowVisible: false, animation: 'fade_from_bottom', headerShown:false }} />
              <Stack.Screen name='location' options={{ headerTitle: '', headerShadowVisible: false, animation: 'fade_from_bottom' }} />
            <Stack.Screen name='personal' options={{ headerTitle: '', headerShadowVisible: false, animation: 'fade_from_bottom' }} />
            <Stack.Screen name='email' options={{ headerTitle: '', headerShadowVisible: false, animation: 'fade_from_bottom' }} />
            <Stack.Screen name='password' options={{ headerTitle: '', headerShadowVisible: false, animation: 'fade_from_bottom' }} />
        </Stack>
    )
}