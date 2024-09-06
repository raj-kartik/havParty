import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import Container from '../../Custom/Container';
import CustomText from '../../Custom/CustomText';
import CustomIcon from '../../Custom/CustomIcon';
import {Theme} from '../../theme/Color';
import {horizontalScale} from '../../Custom/Matrix';
import {GlobalStyles} from '../GlobalStyles/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
import { ClubData } from '../../Data/ClubData';
import Card1 from '../../Cards/Card1';
const Search = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <View
        style={[
          GlobalStyles.row,
          {
            marginHorizontal: horizontalScale(10),
            width: '100%',
            marginVertical: horizontalScale(10),
          },
        ]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Searching')}
          style={styles.inputContainer}>
          <CustomText text="eg. Bartista Club" />
        </TouchableOpacity>
      </View>
        <FlatList
          data={ClubData}
          style={{flex:1}}
          // numColumns={2}
          key={item => item.id}
          renderItem={({item})=>{
            return <Card1
              item={item}
              photo={item.photos}
            />
          }}
        />
    </Container>
  );
};

export default Search;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Theme.black.hexa,
    padding: horizontalScale(10),
    width: '90%',
    borderRadius: horizontalScale(5),
    marginHorizontal: horizontalScale(10),
    justifyContent: 'center',
  },
});
