import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
    return (
        <Stack>
            <Stack.Screen name='onboardingOne' options={{ headerShown: false, animation: 'fade_from_bottom' }} />
            <Stack.Screen name='onboardingTwo' options={{ headerShown: false, animation: 'fade_from_bottom' }} />
            <Stack.Screen name='onboardingThree' options={{ headerShown: false, animation: 'fade_from_bottom' }} />
            <Stack.Screen name='onboardingFour' options={{ headerShown: false, animation: 'fade_from_bottom' }} />
            <Stack.Screen name='onboardingFive' options={{ headerShown: false, animation: 'fade_from_bottom' }} />
        </Stack>
    )
}