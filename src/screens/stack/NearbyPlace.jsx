import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {horizontalScale} from '../../Custom/Matrix';
import {Theme} from '../../theme/Color';
import CustomText from '../../Custom/CustomText';
import {Fonts} from '../../utils/Fonts';

const NearbyPlace = ({title, data}) => {
  const nearby = [
    {id: 1, place: 'Rajendra Place'},
    {id: 2, place: 'Rajendra Place'},
    {id: 3, place: 'Rajendra Place'},
    {id: 4, place: 'Rajendra Place'},
  ];
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          padding: horizontalScale(10),
          alignItems: 'center',
          width: horizontalScale(90),
          height: horizontalScale(100),
        }}>
        <View
          style={{
            width: horizontalScale(50),
            height: horizontalScale(50),
            borderRadius: horizontalScale(100),
            backgroundColor: Theme.black.hexa,
          }}
        />
        <CustomText
          text={item.place}
          textColor={Theme.text.secondary}
          customStyle={{textAlign: 'center'}}
        />
      </View>
    );
  };
  return (
    <View style={{marginTop: horizontalScale(20)}}>
      <CustomText
        text={title}
        fontFamily={Fonts.bold}
        customStyle={{fontSize: 18}}
        textColor={Theme.text.tertiary}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={nearby}
        key={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default NearbyPlace;

const styles = StyleSheet.create({});
