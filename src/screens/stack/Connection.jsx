import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Container from '../../Custom/Container';
import CustomHeader from '../../Custom/CustomHeader';
import {Theme} from '../../theme/Color';
import {FriendList} from '../../Data/FriendList';
import FriendCard from '../../Cards/FriendCard';

const Connection = () => {
  return (
    <Container>
      <CustomHeader 
        title="Connection" 
        // primary={Theme.red.secondary} 
      />
      <FlatList
        contentContainerStyle={{alignItems:"center"}}
        data={FriendList}
        key={item => item.id}
        renderItem={({item}) => <FriendCard item={item} />}
      />
    </Container>
  );
};

export default Connection;

const styles = StyleSheet.create({});
