import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React from 'react';
import Container from '../../Custom/Container';
import ProfileCard from '../../Cards/ProfileCard';
import {horizontalScale} from '../../Custom/Matrix';
import FamousBar from '../stack/Famous/FamousBar';
import LiveNow from '../stack/LiveNow/LiveNow';
import NearbyPlaceCard from '../stack/NearBy/NearByCard';
import FamousCard from '../stack/Famous/FamousCard';
import LiveCard from '../stack/LiveNow/LiveCard';

const Home = () => {
  return (
    <Container>
      <ProfileCard />
      <ScrollView style={{marginHorizontal: horizontalScale(10)}}>
        <View>
          <NearbyPlaceCard title="Nearby Place" />
        </View>
        <View>
          <FamousCard title="Vibes" />
        </View>
        <LiveCard />
      </ScrollView>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
