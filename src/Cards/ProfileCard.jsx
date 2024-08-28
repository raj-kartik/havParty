import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Theme} from '../theme/Color';
import {horizontalScale, screenWidth} from '../Custom/Matrix';
import CustomText from '../Custom/CustomText';
import {Fonts} from '../utils/Fonts';
import * as Animatable from 'react-native-animatable';
const ProfileCard = () => {
  return (
    // <Animatable.View easing={'ease-in'} iterationCount={1} animation={"slideInRight"} duration={1000} >
      <LinearGradient
        colors={[Theme.secondary, Theme.black.secondary]}
        style={styles.container}
        start={{x: 0, y: 0}}>
        <View
          style={{
            justifyContent: 'center',
            flex: 0.3,
            padding: horizontalScale(10),
          }}>
          <View
            style={{
              width: horizontalScale(70),
              height: horizontalScale(70),
              borderRadius: horizontalScale(100),
              backgroundColor: Theme.primary,
            }}
          />
        </View>

        <View style={{justifyContent: 'center', flex: 0.7}}>
          <CustomText
            text="Hi Kartik"
            customStyle={{
              fontSize: 28,
              padding: 0,
              margin: 0,
            }}
            fontFamily={Fonts.bold}
          />

          <Text
            style={{
              color: Theme.text.primary,
              fontSize: 14,
            }}>
            We are going for Parties! 🎉🎉🎊{' '}
          </Text>
          <Text
            style={{
              color: Theme.text.primary,
              fontSize: 14,
            }}>
            Are you coming?
          </Text>
        </View>
      </LinearGradient>
    // </Animatable.View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: screenWidth * 0.25,
    // borderRadius: horizontalScale(100),
    borderTopLeftRadius:horizontalScale(100),
    borderBottomLeftRadius:horizontalScale(100),
    flexDirection: 'row',
    marginLeft: horizontalScale(10),
    marginTop: horizontalScale(10),
    alignItems: 'center',
    padding: horizontalScale(0),
  },
});
