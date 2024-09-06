import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../Custom/Container'
import CustomHeader from '../../Custom/CustomHeader'
import { Theme } from '../../theme/Color'

const Message = () => {
  return (
    <Container>
        <ScrollView>
            <CustomHeader
                title="Message"
                // primary={Theme.red.secondary}
            />
        </ScrollView>
    </Container>
  )
}

export default Message

const styles = StyleSheet.create({})