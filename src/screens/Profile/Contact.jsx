import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../Custom/Container'
import CustomText from '../../Custom/CustomText'
import CustomHeader from '../../Custom/CustomHeader'
import { Theme } from '../../theme/Color'

const Contact = () => {
  return (
    <Container>
        <CustomHeader
            title="Contact Us"
            primary={Theme.secondary}
        />
    </Container>
  )
}

export default Contact

const styles = StyleSheet.create({})