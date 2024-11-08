import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment'; // moment.js for date formatting
import Container from '../../Custom/Container';
import {moderateScale} from '../../Custom/Matrix';
import CustomText from '../../Custom/CustomText';
import {Fonts} from '../../utils/Fonts';
import {Theme} from '../../theme/Color';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Generate an array with the upcoming 7 days
  const getUpcomingDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = moment().add(i, 'days');
      days.push({
        dayName: date.format('ddd'), // Day name (e.g., Monday)
        dateFormatted: date.format('MMM D'), // Formatted date (e.g., Oct 4)
        fullDate: date.format('YYYY-MM-DD'), // Full date (for internal use)
      });
    }
    return days;
  };

  const days = getUpcomingDays();

  return (
    <View style={{marginTop:moderateScale(10)}}>
      {/* <Text style={styles.headerText}>Select a Date</Text> */}
      <CustomText
        text="Select a Date"
        fontFamily={Fonts.bold}
        customStyle={styles.headerText}
      />

      {/* Display the list of upcoming days */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={days}
        keyExtractor={item => item.fullDate}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.dateContainer,
              selectedDate === item.fullDate ? styles.selectedDate : {},
            ]}
            onPress={() => setSelectedDate(item.fullDate)}>
            <CustomText
              text={item.dayName}
              customStyle={styles.dayName}
              color={Theme.black.primary}
            />
            {/* <Text style=></Text> */}
            <CustomText
              text={item.dateFormatted}
              customStyle={styles.dateFormatted}
              textColor={Theme.second.secondary}
              fontFamily={Fonts.bold}
            />
            {/* <Text style=></Text> */}
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 12,
    marginBottom: moderateScale(5),
  },
  list: {
    flexDirection: 'row',
  },
  dateContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: Theme.black.hexa,
    marginRight: 10,
    width: moderateScale(100),
    height: moderateScale(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDate: {
    backgroundColor: Theme.black.tertiary, // Highlight selected date
  },
  dayName: {
    fontSize: 12,
    padding: 0,
    margin: 0,
  },
  dateFormatted: {
    fontSize: 16,
    padding: 0,
    margin: 0,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    color: '#4CAF50',
  }
});
