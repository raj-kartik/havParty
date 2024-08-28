import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Container from '../../../Custom/Container'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeBlank from '../../ExtraScreens/HomeBlank'
import AboutBar from '../../stack/AboutBar'
import Menu from '../../ExtraScreens/Menu'
import PersonalInfo from '../../Profile/PersonalInfo'
import AccSetting from '../../Profile/AccSetting'
import Notification from '../../Profile/Notification'
import Support from '../../Profile/Support'
import Contact from '../../Profile/Contact'
import Searching from '../../stack/Searching'

const AppStack = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Container>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='HomeBlank' component={HomeBlank} />
        <Stack.Screen name='AboutBar' component={AboutBar} />
        <Stack.Screen name='Menu' component={Menu} />

        {/* profile */}
        <Stack.Screen name='Personal' component={PersonalInfo} />
        <Stack.Screen name='AccSetting' component={AccSetting} />
        <Stack.Screen name='Notification' component={Notification} />
        <Stack.Screen name='Support' component={Support} />
        <Stack.Screen name='ContactUs' component={Contact} />

        {/* search */}
        <Stack.Screen name='Searching' component={Searching} />

      </Stack.Navigator>
    </Container>
  )
}

export default AppStack

const styles = StyleSheet.create({})