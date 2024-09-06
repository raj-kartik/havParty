import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {GlobalStyles} from '../screens/GlobalStyles/GlobalStyles';
import {horizontalScale, moderateScale} from '../Custom/Matrix';
import {Theme} from '../theme/Color';
import CustomText from '../Custom/CustomText';
import {Fonts} from '../utils/Fonts';
import {useSelector} from 'react-redux';
const UsersCard = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state?.user?.user?.user);

  return (
    <View style={[GlobalStyles.row]}>
      <View style={{flex: 0.5, alignItems: 'center'}}>
        <View
          style={{
            height: moderateScale(100),
            width: moderateScale(100),
            marginTop: moderateScale(10),
            borderRadius: moderateScale(100),
            backgroundColor: Theme.text.primary,
          }}
        />
        <CustomText
          text={user.name}
          fontFamily={Fonts.bold}
          customStyle={{fontSize: 18}}
        />
      </View>
      <View style={[{flex: 1}]}>
        <View style={[GlobalStyles.row, {justifyContent: 'space-evenly'}]}>
          <View style={{alignItems: 'center'}}>
            <CustomText text="22" />
            <CustomText text="Friend" />
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Connect')}
            style={{alignItems: 'center'}}>
            <CustomText text="5" />
            <CustomText text="Request" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Personal')}
          style={{
            backgroundColor: Theme.red.secondary,
            alignItems: 'center',
            marginVertical: horizontalScale(5),
            padding: horizontalScale(5),
            borderRadius: horizontalScale(5),
          }}>
          <CustomText fontFamily={Fonts.bold} text="Edit Profile" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UsersCard;

const styles = StyleSheet.create({});
