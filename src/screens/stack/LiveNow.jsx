import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Fonts } from '../../utils/Fonts';
import CustomText from '../../Custom/CustomText';
import { horizontalScale } from '../../Custom/Matrix';
import { Theme } from '../../theme/Color';
const LiveNow = () => {
  return (
    <View style={{marginTop:horizontalScale(20)}} >
      <CustomText
        text="Events" 
        fontFamily={Fonts.bold}
        customStyle={{fontSize: 18}}
        textColor={Theme.text.tertiary}
      />
    </View>
  );
};

export default LiveNow;

const styles = StyleSheet.create({});
