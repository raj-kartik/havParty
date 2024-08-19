import { View, Text } from 'react-native'
import React from 'react'
import Container from '../../Custom/Container'
import { Theme } from '../../theme/Color'
import CustomText from '../../Custom/CustomText'
import AppStack from './AppStack/AppStack'
import AuthStack from './AuthStack/AuthStack'
const AppNavigation = () => {
  return (
    <Container>
      <AppStack/>
      {/* <AuthStack/> */}
    </Container>
  )
}

export default AppNavigation