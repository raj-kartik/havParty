import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../Custom/Container'
import CustomHeader from '../../Custom/CustomHeader'
import { Theme } from '../../theme/Color'

const Support = () => {
  return (
    <Container>
        <CustomHeader
            title="Support"
            primary={Theme.red.secondary}
        />
    </Container>
  )
}

export default Support

const styles = StyleSheet.create({})