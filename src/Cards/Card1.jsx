import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {horizontalScale, screenHeight, screenWidth} from '../Custom/Matrix';
import CustomText from '../Custom/CustomText';
import CustomIcon from '../Custom/CustomIcon';
import {GlobalStyles} from '../screens/GlobalStyles/GlobalStyles';
import {Theme} from '../theme/Color';
import {Fonts} from '../utils/Fonts';

const Card1 = ({item, photo}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.imageView,
        styles.cardContainer,
        {marginVertical: horizontalScale(10)},
      ]}>
      <ImageBackground
        source={item.photos[0]}
        imageStyle={styles.imageView}
        style={[styles.imageView, {position: 'relative'}]}>
        <View
          style={[
            styles.aboutBar,
            {
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              bottom: horizontalScale(5),
              justifyContent:"space-between",
              left: 0,
              right: 0,
            },
          ]}>
          <CustomText
            text={item.name}
            customStyle={{padding: 0, margin: 0}}
            fontFamily={Fonts.bold}
          />
          <CustomIcon
            type="AntDesign"
            name="right"
            color={Theme.text.primary}
            customStyle={{padding: 0, margin: 0}}
          />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Card1;

const styles = StyleSheet.create({
  imageView: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.3,
  },
  aboutBar: {
    padding: horizontalScale(20),
    backgroundColor: Theme.red.secondary,
    margin: horizontalScale(5),
    borderRadius: horizontalScale(10),
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth,
  },
});
