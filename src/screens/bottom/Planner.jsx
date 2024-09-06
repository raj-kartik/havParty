import { View, Text } from 'react-native'
import React from 'react'
import Container from '../../Custom/Container'
import CustomText from '../../Custom/CustomText'
import CustomHeader from '../../Custom/CustomHeader'
import { Theme } from '../../theme/Color'

const Planner = () => {
  return (
    <Container>
        <CustomHeader
          title="Planner"
          primary={Theme.red.secondary}
          isBack={false}
        />
    </Container>
  )
}

export default Planner