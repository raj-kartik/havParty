import { View, Text } from 'react-native'
import React from 'react'
import Container from '../../Custom/Container'
import { Theme } from '../../theme/Color'
import CustomText from '../../Custom/CustomText'
import AppStack from './AppStack/AppStack'
import AuthStack from './AuthStack/AuthStack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSelector } from 'react-redux'
const AppNavigation = () => {

  const isAuth = useSelector(state => state.user?.isAuthUser);
  return (
    <Container>
      {
        isAuth?<AppStack/>:<AuthStack/>
      }
    </Container>
  )
}

export default AppNavigation