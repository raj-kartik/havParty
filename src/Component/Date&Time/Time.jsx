import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomText from '../../Custom/CustomText';
import {Theme} from '../../theme/Color';
import {moderateScale} from '../../Custom/Matrix';
import {Fonts} from '../../utils/Fonts';

const Time = () => {
  const [selectTime, setSelectTime] = useState(null);
  const time = [];

  // Generating time from 12:01 PM to 2:00 AM
  const createTimeSlots = () => {
    // 12:01 PM to 11:59 PM
    for (let i = 12; i < 24; i += 2) {
      const period = i >= 12 ? 'PM' : 'AM'; 
      const hour = i === 12 ? 12 : i % 12;
      time.push(`${hour} ${period}`); // 12:01 PM, 2:01 PM, etc.
    }
    
    // 12:00 AM to 2:00 AM
    time.push('12 AM');
    time.push('2 AM');
  };

  createTimeSlots();

  return (
    <View style={{marginVertical: moderateScale(10)}}>
      <CustomText
        text="Select a Time"
        fontFamily={Fonts.bold}
        customStyle={styles.headerText}
      />
      <FlatList
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        data={time}
        keyExtractor={item => item}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.timeButton,
                selectTime === index ? styles.selectedDate : {},
              ]}
              onPress={() => setSelectTime(index)}>
              <CustomText text={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Time;

const styles = StyleSheet.create({
  timeButton: {
    // padding:moderateScale(12),
    // marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: Theme.black.hexa,
    margin: moderateScale(5),
    width: moderateScale(60),
    height: moderateScale(60),
    justifyContent: 'center',
  },
  selectedDate: {
    backgroundColor: Theme.black.tertiary, // Highlight selected date
  },
  headerText: {
    fontSize: 12,
    marginBottom: moderateScale(5),
  },
});
