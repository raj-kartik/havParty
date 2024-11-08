import {View, Text, ScrollView, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import Container from '../../Custom/Container';
import CustomHeader from '../../Custom/CustomHeader';
import {Theme} from '../../theme/Color';
import {moderateScale} from '../../Custom/Matrix';
import FamousBar from '../stack/Famous/FamousBar';
import {FavData} from '../../Data/FavoriteData';
import Card2 from '../../Cards/Card2';
import CustomText from '../../Custom/CustomText';
import {Fonts} from '../../utils/Fonts';

const Events = () => {
  const renderItem = ({item}) => <Card2 item={item} />;
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <CustomHeader
          title="Events"
          primary={Theme.red.secondary}
          isBack={false}
        />
        <View style={[{marginHorizontal: moderateScale(10)}]}>
          <FamousBar title="Planner" />

          <View>
            <CustomText
              text="Events"
              fontFamily={Fonts.bold}
              customStyle={{fontSize: 18}}
              textColor={Theme.text.tertiary}
            />
            <FlatList
              style={{marginTop: moderateScale(10)}}
              data={FavData}
              key={item => item.id}
              renderItem={renderItem}
              contentContainerStyle={styles.flatListContent}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  flatListContent: {
    alignItems: 'center',
  },
});

export default Events;
