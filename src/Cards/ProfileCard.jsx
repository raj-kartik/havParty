import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Theme} from '../theme/Color';
import {horizontalScale, moderateScale, screenWidth} from '../Custom/Matrix';
import CustomText from '../Custom/CustomText';
import {Fonts} from '../utils/Fonts';
import * as Animatable from 'react-native-animatable';
import CustomIcon from '../Custom/CustomIcon';
import {GlobalStyles} from '../screens/GlobalStyles/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';

const ProfileCard = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state.user?.user?.user)
  
  
  return (
    <LinearGradient
      colors={[Theme.red.secondary, Theme.black.secondary]}
      style={[styles.container, {position: 'relative'}]}
      start={{x: 0, y: 0}}>
      <View style={styles.titleView}>
        <CustomText
          text={`Hi ${user?.name}`}
          customStyle={styles.text}
          fontFamily={Fonts.bold}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Connect')}
        style={[
          {
            backgroundColor: Theme.primary,
          },
          GlobalStyles.center,
          styles.iconView,
        ]}>
        <CustomIcon
          type="Entypo"
          name="stumbleupon"
          color={Theme.text.secondary}
          customStyle={{alignItems: 'flex-end'}}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Message')}
        style={[
          {
            backgroundColor: Theme.primary,
          },
          GlobalStyles.center,
          styles.iconView,
        ]}>
        <CustomIcon
          type="FontAwesome"
          name="paper-plane"
          color={Theme.text.secondary}
          customStyle={{alignItems: 'flex-end'}}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: screenWidth * 0.2,
    borderRadius: horizontalScale(100),
    marginLeft: horizontalScale(10),
    marginTop: horizontalScale(10),
    padding: horizontalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    padding: 0,
    margin: 0,
    textAlign: 'center',
  },
  titleView: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(100),
  },
});
