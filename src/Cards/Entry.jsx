import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import CustomText from '../Custom/CustomText';
import { GlobalStyles } from '../screens/GlobalStyles/GlobalStyles';
import { Theme } from '../theme/Color';
import { moderateScale, screenWidth } from '../Custom/Matrix';
import CustomIcon from '../Custom/CustomIcon';
import { Fonts } from '../utils/Fonts';

const Entry = ({ category, amount, handleAmount }) => {
  const [people, setPeople] = useState(0);
  const [price, setPrice] = useState(0);

  // Recalculate the price whenever people or amount change
  useEffect(() => {
    setPrice(people * amount);
  }, [people, amount]);

  return (
    <View style={[styles.container, { position: 'relative' }]}>
      <View style={styles.leftCircle} />
      <View style={[GlobalStyles.between, { padding: moderateScale(10) }]}>
        <CustomText
          text={category}
          fontFamily={Fonts.bold}
          customStyle={{ fontSize: 18 }}
        />

        <View style={{ alignItems: 'center' }}>
          <View style={GlobalStyles.row}>
            <TouchableOpacity
              disabled={people === 0} // Disable if no people to subtract
              onPress={() => {
                if (people > 0) {
                  const updatedPeople = people - 1;
                  setPeople(updatedPeople);
                  handleAmount(-amount, updatedPeople); // Subtract the correct amount
                }
              }}
              activeOpacity={0.8}
              style={[
                styles.addButton,
                { backgroundColor: Theme.secondary },
              ]}
            >
              <CustomIcon name="minus" type="Feather" />
            </TouchableOpacity>

            <CustomText
              customStyle={styles.textView}
              text={people > 0 ? people : 'Add'}
            />

            <TouchableOpacity
              onPress={() => {
                const updatedPeople = people + 1;
                setPeople(updatedPeople);
                handleAmount(amount, updatedPeople); // Add the correct amount
              }}
              activeOpacity={0.8}
              style={styles.addButton}
            >
              <CustomIcon name="plus" type="Feather" />
            </TouchableOpacity>
          </View>

          {/* Show price only if people > 0 */}
          {people > 0 && (
            <>
              {amount !== 0 ? (
                <CustomText customStyle={styles.priceStyle} text={`₹${price}`} />
              ) : (
                <CustomText customStyle={styles.priceStyle} text={'Free'} />
              )}
            </>
          )}
        </View>
      </View>
      <View style={styles.rightCircle} />
    </View>
  );
};

export default Entry;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.black.primary,
    borderRadius: moderateScale(5),
    marginBottom: moderateScale(10),
    height: screenWidth * 0.25,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
  },
  addButton: {
    width: moderateScale(30),
    height: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.secondary,
    margin: moderateScale(5),
    borderRadius: moderateScale(100),
  },
  textView: {
    height: moderateScale(30),
    width: moderateScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: moderateScale(5),
  },
  leftCircle: {
    width: moderateScale(60),
    height: moderateScale(60),
    backgroundColor: Theme.black.hexa,
    borderRadius: moderateScale(50),
    position: 'absolute',
    left: -moderateScale(45),
  },
  rightCircle: {
    width: moderateScale(60),
    height: moderateScale(60),
    backgroundColor: Theme.black.hexa,
    borderRadius: moderateScale(50),
    position: 'absolute',
    right: -moderateScale(45),
  },
  priceStyle: {
    backgroundColor: Theme.black.tertiary,
    width: moderateScale(100),
    height: moderateScale(25),
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: moderateScale(5),
    marginTop: moderateScale(5),
  },
});
