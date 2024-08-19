import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Theme } from '../theme/Color'
const Container = ({children, customStyle}) => {
  return (
    <View style={[{flex:1, backgroundColor:Theme.primary}, customStyle]} >
      {children}
    </View>
  )
}

export default Container;