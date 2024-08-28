import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Fonts } from '../utils/Fonts';

const CustomText = ({
  text,
  textColor = '#fff',
  customStyle,
  fontFamily = Fonts.regular,
}) => {
  return (
    <Text
      style={{
        ...customStyle,
        color: textColor,
        fontFamily: fontFamily,
        padding:0,
        margin:0
      }}>
      {text}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({});
