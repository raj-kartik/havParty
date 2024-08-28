import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../Custom/Container'
import CustomText from '../../Custom/CustomText'
import CustomHeader from '../../Custom/CustomHeader'
import { Theme } from '../../theme/Color'

const Notification = () => {
  return (
    <Container>
        <CustomHeader
            title="Notifcation"
            primary={Theme.secondary}
        />
    </Container>
  )
}

export default Notification

const styles = StyleSheet.create({})