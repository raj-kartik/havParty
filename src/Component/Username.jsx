import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {GlobalStyles} from '../screens/GlobalStyles/GlobalStyles';
import CustomText from '../Custom/CustomText';
import CustomIcon from '../Custom/CustomIcon';
import {Fonts} from '../utils/Fonts';
import {Theme} from '../theme/Color';
import {horizontalScale, moderateScale} from '../Custom/Matrix';
import {useSelector} from 'react-redux';
const Username = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state?.user?.user?.user);
  return (
    <View
      style={[
        GlobalStyles.row,
        {
          justifyContent: 'space-between',
          marginTop: moderateScale(5),
          marginHorizontal: moderateScale(10),
        },
      ]}>
      <CustomText
        text={user?.username}
        fontFamily={Fonts.bold}
        customStyle={{fontSize: 24}}
      />
      <TouchableOpacity
        style={[GlobalStyles.center]}
        onPress={() => navigation.navigate('ProfileBlank')}>
        <CustomIcon
          type="AntDesign"
          name="setting"
          color={Theme.text.primary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Username;

const styles = StyleSheet.create({});
