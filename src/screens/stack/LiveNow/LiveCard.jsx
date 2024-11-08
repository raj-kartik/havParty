import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Fonts} from '../../../utils/Fonts';
import CustomText from '../../../Custom/CustomText';
import {horizontalScale} from '../../../Custom/Matrix';
import {Theme} from '../../../theme/Color';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
const LiveCard = () => {
  const navigation = useNavigation();
  return (
    <View style={{marginTop: horizontalScale(20)}}>
      <View style={[GlobalStyles.between]}>
        <CustomText
          text="Events"
          fontFamily={Fonts.bold}
          customStyle={{fontSize: 18}}
          textColor={Theme.text.tertiary}
        />
        <TouchableOpacity onPress={()=>navigation.navigate('LiveNow')} activeOpacity={0.5}>
          <CustomText text="View all" customStyle={{fontSize: 12}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LiveCard;

const styles = StyleSheet.create({});
