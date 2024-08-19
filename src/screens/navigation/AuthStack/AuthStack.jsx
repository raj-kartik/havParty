import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUp from './SignUp';
import Container from '../../../Custom/Container';
import SignIn from './SignIn';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Container>
            <Stack.Navigator initialRouteName='SignUp' screenOptions={{ headerShown: false }} >
                <Stack.Screen name='SignIn' component={SignIn} />
                <Stack.Screen name='SignUp' component={SignUp} />
            </Stack.Navigator>
        </Container>
    )
}

export default AuthStack

const styles = StyleSheet.create({})