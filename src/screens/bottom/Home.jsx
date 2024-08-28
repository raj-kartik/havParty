import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React from 'react';
import Container from '../../Custom/Container';
import CustomText from '../../Custom/CustomText';
import CustomHeader from '../../Custom/CustomHeader';
import ProfileCard from '../../Cards/ProfileCard';
import { horizontalScale } from '../../Custom/Matrix';
import { Fonts } from '../../utils/Fonts';
import NearbyPlace from '../stack/NearbyPlace';
import FamousBar from '../stack/FamousBar';
import LiveNow from '../stack/LiveNow';
import { Theme } from '../../theme/Color';

const Home = () => {
  return (
    <Container>
      <ProfileCard />
      <ScrollView style={{marginHorizontal:horizontalScale(10)}} >
        <View>
          <NearbyPlace/>
        </View>
        <View>
          <FamousBar/>
          <LiveNow/>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
