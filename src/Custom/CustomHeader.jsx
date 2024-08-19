import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import {Theme} from '../theme/Color';
import {screenHeight, screenWidth} from './Matrix';
import CustomIcon from './CustomIcon';
import {useNavigation} from '@react-navigation/native';
import CustomText from './CustomText';
import {FadeInLeft} from 'react-native-reanimated';
import {Fonts} from '../utils/Fonts';

const CustomHeader = ({isBack = true, title}) => {
  const navigation = useNavigation();
  return (
    <View style={{width: screenWidth, height:screenWidth*0.1}}>
      <View style={{position: 'relative', width:screenWidth, flex:1, }}>
        {isBack && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{zIndex: 1}}>
            <CustomIcon type="AntDesign" name="arrowleft" color="#fff" />
          </TouchableOpacity>
        )}

        <CustomText
          textColor="#fff"
          fontFamily={Fonts.bold}
          text={title}
          customStyle={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            textAlign:"center",
            fontSize:26
          }}
        />
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
