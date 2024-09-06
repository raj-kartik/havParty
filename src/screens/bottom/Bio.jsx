import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Container from '../../Custom/Container';
import CustomHeader from '../../Custom/CustomHeader';
import CustomText from '../../Custom/CustomText';
import {Fonts} from '../../utils/Fonts';
import {horizontalScale, moderateScale} from '../../Custom/Matrix';
import {GlobalStyles} from '../GlobalStyles/GlobalStyles';
import CustomIcon from '../../Custom/CustomIcon';
import {Theme} from '../../theme/Color';
import {useNavigation} from '@react-navigation/native';
import Username from '../../Component/Username';
import ProfileCard from '../../Cards/ProfileCard';
import UsersCard from '../../Cards/UsersCard';
import NearbyPlace from '../stack/NearbyPlace';
import FamousBar from '../stack/FamousBar';

const Bio = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ScrollView style={{marginHorizontal: horizontalScale(10)}}>
        <Username />
        <UsersCard/>
        <NearbyPlace title="Visited Place" />
        <FamousBar/>
      </ScrollView> 
    </Container>
  );
};

export default Bio;

const styles = StyleSheet.create({});
