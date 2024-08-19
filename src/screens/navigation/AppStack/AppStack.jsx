import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Container from '../../../Custom/Container'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeBlank from '../../ExtraScreens/HomeBlank'

const AppStack = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Container>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='HomeBlank' component={HomeBlank} />
      </Stack.Navigator>
    </Container>
  )
}

export default AppStack

const styles = StyleSheet.create({})