import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Container from '../../Custom/Container';
import CustomHeader from '../../Custom/CustomHeader';
import {Theme} from '../../theme/Color';
import {Images} from '../../utils/Images';
import {horizontalScale, moderateScale, screenWidth} from '../../Custom/Matrix';
import CustomText from '../../Custom/CustomText';
import {GlobalStyles} from '../GlobalStyles/GlobalStyles';
import {Fonts} from '../../utils/Fonts';
import CustomIcon from '../../Custom/CustomIcon';
import DatePicker from '../../Component/Date&Time/DatePicker';
import CustomButton2 from '../../Custom/CustomButton2';
import Time from '../../Component/Date&Time/Time';
import Entry from '../../Cards/Entry';

const Booking = () => {
  const [like, setLike] = useState(false);
  const [total, setTotal] = useState(0);

  const handleAmount = (value, people) => {
    console.log('--- total amount and people ----', value, people);

    // Update total amount based on the change in value
    const newTotal = total + value; // Simply add or subtract the value (not multiplied by people here)

    // Reset total to 0 if no people
    if (people === 0 && newTotal <= 0) {
      setTotal(0);
    } else {
      setTotal(newTotal);
    }
  };

  return (
    <Container>
      <CustomHeader
        title="Booking"
        isBack={false}
        primary={Theme.red.secondary}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={{marginHorizontal: horizontalScale(10)}}>
        <View style={{alignItems: 'center'}}>
          <Image source={Images.App3} style={styles.imageView} />
          <View style={[styles.contentView, GlobalStyles.between]}>
            <CustomText
              text="Bartista Club"
              textColor={Theme.black.penta}
              customStyle={{fontSize: 24}}
            />

            <TouchableOpacity
              onPress={() => {
                setLike(!like);
              }}>
              {like ? (
                <CustomIcon type="AntDesign" name="heart" />
              ) : (
                <CustomIcon type="AntDesign" name="hearto" />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.priceView}>
          <CustomText
            text="Rs1250"
            textColor={Theme.black.primary}
            fontFamily={Fonts.Anek.SemiBold}
            customStyle={{fontSize: 16}}
          />
          <CustomText
            text="/person"
            textColor={Theme.black.primary}
            fontFamily={Fonts.Anek.SemiBold}
            customStyle={{fontSize: 12}}
          />
        </View>

        <DatePicker />

        <Time />
        {/* Counting of people */}
        <CustomText text="Guests" fontFamily={Fonts.bold} />
        <CustomText
          text="Choose the number of guests going"
          customStyle={{fontSize: 12}}
          textColor={Theme.second.primary}
        />
        <View style={styles.countView}>
          <Entry category="Couples" amount={0} handleAmount={handleAmount} />
          <Entry category="Lady" amount={1200} handleAmount={handleAmount} />
          <Entry category="Stag" amount={1200} handleAmount={handleAmount} />
        </View>
      </ScrollView>
      <View
        style={{margin: moderateScale(10), marginBottom: moderateScale(20)}}>
        <CustomButton2 title={`Book ₹${total ? total : '0'}`} />
      </View>
    </Container>
  );
};

export default Booking;

const styles = StyleSheet.create({
  imageView: {
    width: screenWidth * 0.95,
    height: screenWidth * 0.5,
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: Theme.black.tertiary,
    shadowOpacity: 0.5,
    shadowOffset: 3,
    shadowColor: Theme.black.tertiary,
  },
  contentView: {
    width: '95%',
    marginTop: moderateScale(5),
  },
  priceView: {
    backgroundColor: Theme.icon.primary,
    padding: horizontalScale(5),
    width: horizontalScale(100),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(100),
    marginHorizontal: horizontalScale(10),
    marginTop: moderateScale(2),
  },
  countView: {
    borderWidth: 1,
    borderRadius: moderateScale(10),
    backgroundColor: Theme.black.hexa,
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(10),
    marginVertical: moderateScale(10),
  },
});
