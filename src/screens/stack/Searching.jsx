import {StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList} from 'react-native';
import React from 'react';
import Container from '../../Custom/Container';
import CustomIcon from '../../Custom/CustomIcon';
import {Theme} from '../../theme/Color';
import {GlobalStyles} from '../GlobalStyles/GlobalStyles';
import {horizontalScale, screenWidth} from '../../Custom/Matrix';
import { Fonts } from '../../utils/Fonts';
import { useNavigation } from '@react-navigation/native';
import { searchData } from '../../Data/SearchData';
import CustomText from '../../Custom/CustomText';
const Searching = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <View style={[GlobalStyles.row, {marginHorizontal: horizontalScale(10), marginVertical:horizontalScale(10)}]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{zIndex: 9, padding: 0, margin: 0}}>
          <CustomIcon
            type="AntDesign"
            name="arrowleft"
            color={Theme.text.primary}
            customStyle={{
              margin: 0,
            }}
          />
        </TouchableOpacity>
        <TextInput
          autoFocus={true}
          style={styles.inputContainer}
        />
      </View>

      <FlatList
        style={{flex:1, marginHorizontal:horizontalScale(10)}}
        data={searchData}
        keyExtractor={item => item.id}
        renderItem={({item})=>{
          return<TouchableOpacity style={[GlobalStyles.row, {backgroundColor:Theme.black.secondary, justifyContent:"space-between", 
            margin:horizontalScale(5),padding:horizontalScale(5), borderRadius:horizontalScale(5)
          } ]} >
            <CustomText
              text={item.search}
              textColor='#fff'
            />
            <CustomIcon
              type="MaterialCommunityIcons"
              name="chart-line-variant"
              color={Theme.text.secondary}
            />
          </TouchableOpacity>
        }}
      />
    </Container>
  );
};

export default Searching;
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Theme.black.hexa,
    padding: horizontalScale(5),
    width: '95%',
    borderRadius: horizontalScale(5),
    fontFamily:Fonts.light
  },
});
