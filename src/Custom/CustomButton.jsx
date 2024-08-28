import React from 'react';
import {Pressable, View, StyleSheet} from 'react-native';
import {Theme} from '../theme/Color';
import CustomIcon from './CustomIcon';
import CustomText from './CustomText';
import {moderateScale} from './Matrix';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../utils/Fonts';

const CustomButton = ({
  onPress,
  title,
  customStyle = {},
  textColor = '#000',
  textStyle = {},
  iconType,
  iconName,
  iconPosition = 'left',
  iconSize = 24,
  iconColor,
  disabled,
  contentStyle,
}) => {
  const colors = Theme;
  return (
    <LinearGradient
      colors={[Theme.black.hexa, Theme.secondary]}
      style={[customStyle]}
      start={{x: 0.5, y: -0.1}}
      end={{x: 0.5, y: 1.5}}>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({pressed}) => [styles.button]}>
        <View style={[styles.content]}>
          {iconName && iconPosition === 'left' && (
            <CustomIcon
              type={iconType}
              name={iconName}
              size={iconSize}
              color={iconColor ?? colors?.iconPrimary}
              style={styles.iconLeft}
            />
          )}
          <CustomText
            customStyle={{fontSize: moderateScale(16)}}
            fontFamily={Fonts.bold}
            text={title}
            textColor={textColor}
          />
          {iconName && iconPosition === 'right' && (
            <CustomIcon
              type={iconType}
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={styles.iconRight}
            />
          )}
        </View>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(4),
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconLeft: {
    marginRight: moderateScale(8),
  },
  iconRight: {
    marginLeft: moderateScale(8),
  },
});

export default CustomButton;
