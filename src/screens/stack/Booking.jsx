import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../Custom/Container'
import CustomHeader from '../../Custom/CustomHeader'
import { Theme } from '../../theme/Color'

const Booking = () => {
  return (
    <Container>
        <CustomHeader
            title="Booking"
            isBack={false}
            primary={Theme.red.secondary}
        />
    </Container>
  )
}

export default Booking

const styles = StyleSheet.create({})