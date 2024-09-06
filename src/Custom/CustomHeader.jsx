import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Theme} from '../theme/Color';
import {horizontalScale, screenHeight, screenWidth} from './Matrix';
import CustomIcon from './CustomIcon';
import {useNavigation} from '@react-navigation/native';
import CustomText from './CustomText';
import {Fonts} from '../utils/Fonts';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
const CustomHeader = ({
  isBack = true,
  title,
  customStyle,
  primary = Theme.black.primary,
}) => {
  const navigation = useNavigation();
  return (
    <Animatable.View
      style={[customStyle, {zIndex: 9, width: screenWidth}]}
      easing={'ease-in'}
      iterationCount={1}
      animation={'slideInDown'}
      duration={200}>
      <LinearGradient
        colors={[primary, 'transparent']}
        style={styles.container}
        start={{x: 1.05, y: -0.1}}
        end={{x: 1.04, y: 1.1}}>
        {isBack && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{zIndex: 9, padding: 0, margin: 0}}>
            <CustomIcon
              type="AntDesign"
              name="arrowleft"
              color={Theme.text.primary}
              customStyle={{
                margin: 0,
              }}
            />
          </TouchableOpacity>
        )}

        <View
          style={{
            marginHorizontal: horizontalScale(5),
            position: 'absolute',
            left: 0,
            right: 0,
          }}>
          <Text
            style={{
              fontSize: 26,
              textAlign: 'center',
              fontFamily: Fonts.bold,
              color: Theme.text.primary,
            }}>
            {title}
          </Text>
          {/* <CustomText text={title} customStyle={{fontSize: 32, textAlign:"center"}} fontFamily={Fonts.bold}  /> */}
        </View>
      </LinearGradient>
    </Animatable.View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    height: screenWidth * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
    position: 'relative',
  },
});
