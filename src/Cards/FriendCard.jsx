import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Theme} from '../theme/Color';
import CustomText from '../Custom/CustomText';
import {
  horizontalScale,
  moderateScale,
  screenHeight,
  screenWidth,
} from '../Custom/Matrix';
import {Fonts} from '../utils/Fonts';
import {GlobalStyles} from '../screens/GlobalStyles/GlobalStyles';
import CustomIcon from '../Custom/CustomIcon';

const FriendCard = ({item}) => {
  return (
    <TouchableOpacity style={[styles.container]}>
      <LinearGradient
        colors={[Theme.secondary, Theme.black.primary, Theme.black.hexa]}
        style={[
          styles.aboutContainer,
          GlobalStyles.row,
          {justifyContent: 'space-between'},
        ]}
        start={{x: -0.1, y: -0.3}}
        end={{x: 0, y: 1.5}}>
        <View>
          <CustomText
            text={item?.name}
            customStyle={{fontSize: 24}}
            // fontFamily={Fonts.Anek.}
          />
          <CustomText
            text={item?.occupation}
            customStyle={{fontSize: 12}}
            textColor={Theme.text.tertiary}
          />
        </View>
        <TouchableOpacity
            onPress={()=>console.log("--- clicking in connection", item.name)}
        >
          <CustomIcon
            type="FontAwesome5"
            name="cocktail"
            color={Theme.text.primary}
          />
        </TouchableOpacity>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default FriendCard;

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
    borderRadius: horizontalScale(10),
    paddingHorizontal: moderateScale(10),
  },
  container: {
    height: screenHeight * 0.15,
    width: screenWidth * 0.9,
    margin: moderateScale(10),
    borderWidth: 1,
    borderColor: Theme.black.hexa,
    borderRadius: horizontalScale(10),
    shadowOpacity: 1,
    shadowOffset: {height: 5, width: 2},
    shadowColor: Theme.secondary,
  },
});
