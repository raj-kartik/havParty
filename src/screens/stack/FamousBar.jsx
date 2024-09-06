import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomText from '../../Custom/CustomText';
import {Fonts} from '../../utils/Fonts';
import {horizontalScale, moderateScale, screenWidth} from '../../Custom/Matrix';
import {Theme} from '../../theme/Color';
import {FlipInEasyX} from 'react-native-reanimated';
import {Images} from '../../utils/Images';
import LinearGradient from 'react-native-linear-gradient';
import {ClubData} from '../../Data/ClubData';
import { useNavigation } from '@react-navigation/native';
const FamousBar = () => {
    const navigation = useNavigation();
  return (
    <View style={{marginTop: horizontalScale(20)}}>
      <CustomText
        text="Vibes"
        fontFamily={Fonts.bold}
        customStyle={{fontSize: 18}}
        textColor={Theme.text.tertiary}
      />
      <FlatList
        bounces={false}
        bouncesZoom={false}
        showsHorizontalScrollIndicator={false}
        data={ClubData.slice(0,3)}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('AboutBar',{bar:item})} >
            <ImageBackground
              style={styles.visitContainer}
              source={item.photos?.[0]}
              imageStyle={{borderRadius: moderateScale(10)}}>
              <LinearGradient
                colors={['#000', 'transparent']}
                start={{x: 0, y: 0}}
                end={{x: 0.5, y: 1}}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  width: '100%',
                  borderRadius: moderateScale(10),
                }}>
                <CustomText
                  text={item.name}
                  fontFamily={Fonts.semiBold}
                  customStyle={{
                    fontSize: 40,
                  }}
                />
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FamousBar;

const styles = StyleSheet.create({
  visitContainer: {
    height: screenWidth * 0.5,
    width: screenWidth * 0.9,
    borderRadius: moderateScale(10),
    backgroundColor: Theme.text.primary,
    margin: horizontalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
