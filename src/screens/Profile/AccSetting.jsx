import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../Custom/Container'
import CustomHeader from '../../Custom/CustomHeader'
import { Theme } from '../../theme/Color'

const AccSetting = () => {
  return (
    <Container>
        <CustomHeader
            title="Account Setting"
            primary={Theme.secondary}
        />
    </Container>
  )
}

export default AccSetting

const styles = StyleSheet.create({})