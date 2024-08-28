import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  screenHeight,
  screenWidth,
} from '../Custom/Matrix';
import LinearGradient from 'react-native-linear-gradient';
import {Theme} from '../theme/Color';
import CustomText from '../Custom/CustomText';
import {Fonts} from '../utils/Fonts';
import { GlobalStyles } from '../screens/GlobalStyles/GlobalStyles';
import CustomIcon from '../Custom/CustomIcon';

const Card2 = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <Image
        source={item?.photo}
        style={styles.imageContainer}
        borderTopLeftRadius={moderateScale(5)}
        borderTopRightRadius={moderateScale(5)}
      />
      <LinearGradient
        colors={[Theme.secondary, Theme.black.primary,Theme.black.hexa]}
        style={styles.aboutContainer}
        start={{x: -0.1, y: -0.3}}
        end={{x: 0, y: 1.5}}>
        <View style={[GlobalStyles.row,{justifyContent:"space-between", alignItems:"center"}]} >
          <CustomText
            text={item.name}
            fontFamily={Fonts.Haniston}
            customStyle={{fontSize: 32}}
          />
          <CustomText
            text={`₹${item.price}`}
            fontFamily={Fonts.Anek.SemiBold}
            customStyle={{fontSize: 20}}
          />
        </View>
        <CustomText
          text={`${item.place},${item.city},${item.state}`}
          textColor={Theme.text.tertiary}
          fontFamily={Fonts.bold}
          customStyle={{fontSize: 12}}
        />
      </LinearGradient>
      <TouchableOpacity activeOpacity={0.7} style={styles.favButton} >
        <CustomIcon
            type="AntDesign"
            name="heart"
            color='#fff'
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Card2;

const styles = StyleSheet.create({
  container: {
    height: screenHeight * 0.3,
    width: screenWidth * 0.9,
    margin: moderateScale(10),
    borderWidth:1,
    borderColor:Theme.black.hexa,
    borderRadius: horizontalScale(5),
    shadowOpacity:1,
    shadowOffset:{height:5, width:2},
    shadowColor:Theme.secondary
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  aboutContainer: {
    flex: 1,
    borderBottomLeftRadius: horizontalScale(5),
    borderBottomRightRadius: horizontalScale(5),
    paddingHorizontal: moderateScale(10),
  },
  favButton:{
    position:"absolute",
    top:horizontalScale(10),
    right:horizontalScale(10),
  }
});
