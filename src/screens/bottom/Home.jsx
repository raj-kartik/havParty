import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../Custom/Container'
import CustomText from '../../Custom/CustomText'
import CustomHeader from '../../Custom/CustomHeader'

const Home = () => {
  return (
    <Container>
        <CustomHeader isBack={false} title="Home" />
        <CustomText
            text="Home"
        />
    </Container>
  )
}

export default Home

const styles = StyleSheet.create({})