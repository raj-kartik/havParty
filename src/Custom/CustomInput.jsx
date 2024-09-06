import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CustomIcon from './CustomIcon';
import {horizontalScale, moderateScale, verticalScale} from './Matrix';
import {Fonts} from '../utils/Fonts';
import {Theme} from '../theme/Color';

const CustomInput = ({
  text,
  values,
  placeholder,
  multiline = false,
  maxLength,
  keyboardType,
  onBlur,
  handleChangeText,
  textColor = Theme.text.primary,
  autoCaptital={},
  borderColor,
  editable,
  customStyle,
  isSecure = false,
  fontFamily = Fonts.bold,
  showCross = false,
  ...props
}) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const clearInput = () => {
    if (handleChangeText) handleChangeText('');
  };

  return (
    <View style={[styles.container, {}]}>
      {text && (
        <Text
          style={[
            styles.textStyle,
            {color: Theme.text.tertiary, fontFamily: fontFamily},
          ]}>
          {text}
        </Text>
      )}
      <View style={styles.inputWrapper}>
        <TextInput
          multiline={multiline}
          autoCapitalize={autoCaptital}
          numberOfLines={multiline ? 4 : null}
          secureTextEntry={isSecure}
          editable={editable}
          ref={inputRef}
          style={[
            styles.input,
            {
              borderColor: isFocused ? Theme.secondary : Theme.second.primary,
              color: textColor,
              fontFamily: fontFamily,
            },
            customStyle,
          ]}
          placeholderTextColor="#ccc"
          onChangeText={handleChangeText}
          onBlur={() => {
            handleBlur();
            onBlur && onBlur();
          }}
          onFocus={handleFocus}
          placeholder={placeholder}
          maxLength={maxLength}
          keyboardType={keyboardType}
          value={values}
          {...props}
        />
        {values && showCross && (
          <TouchableOpacity style={styles.clearButton} onPress={clearInput}>
            <CustomIcon name="cross" type="Entypo" size={20} color="#999" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(15),
  },
  textStyle: {
    color: '#000',
    paddingHorizontal: 2,
    fontSize: moderateScale(16),
  },
  inputWrapper: {
    position: 'relative',
  },
  input: {
    paddingHorizontal: 15,
    color: '#000',
    fontFamily: Fonts.regular,
    borderWidth: 1,
    borderRadius: horizontalScale(8),
    textAlign: 'auto',
  },
  clearButton: {
    position: 'absolute',
    right: 50,
    top: 25,
    transform: [{translateY: -10}],
  },
});

export default CustomInput;
