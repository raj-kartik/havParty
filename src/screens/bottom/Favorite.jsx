import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Container from '../../Custom/Container';
import CustomHeader from '../../Custom/CustomHeader';
import {Theme} from '../../theme/Color';
import {FavData} from '../../Data/FavoriteData';
import Card2 from '../../Cards/Card2';
const Favorite = () => {
  const renderItem = ({item}) => <Card2 item={item} />;
  return (
    <Container>
      <CustomHeader title="Favorite" primary={Theme.secondary} />

      <FlatList
        data={FavData}
        key={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContent}
      />
    </Container>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  flatListContent: {
    alignItems: 'center',
  },
});
