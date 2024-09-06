import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../Custom/Container'
import CustomHeader from '../../Custom/CustomHeader'
import { Theme } from '../../theme/Color'

const Transactions = () => {
  return (
    <Container>
        <CustomHeader
            title="Transactions"
            primary={Theme.red.secondary}
        />
    </Container>
  )
}

export default Transactions

const styles = StyleSheet.create({})