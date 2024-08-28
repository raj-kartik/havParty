import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Container from '../../Custom/Container';
import CustomText from '../../Custom/CustomText';
import {horizontalScale} from '../../Custom/Matrix';
import {Theme} from '../../theme/Color';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../Custom/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const [selectedId, setSelectedId] = useState(null);
  const navigaiton  = useNavigation();
  const profileOptions = [
    {id: 1, options: 'Personal Information', navigating:"Personal"},
    {id: 2, options: 'Account Settings', navigating:"AccSetting"},
    {id: 3, options: 'Notification', navigating:"Notification"},
    {id: 4, options: 'Support',navigating:"Support"},
    {id: 5, options: 'Contact Us', navigating:"ContactUs"},
  ];

  const handlePress = id => {
    setSelectedId(id);
  };

  return (
    <Container>
      <View style={styles.profilePic}>
        {/* Profile picture can be added here */}
      </View>

      <View style={{flex: 0.7}}>
        <FlatList
          data={profileOptions}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.6}
              style={[
                styles.optionContainer,
                {
                  backgroundColor:
                    selectedId === item.id ? Theme.secondary : 'transparent',
                    margin:horizontalScale(10)
                },

              ]}
              onPress={() => navigaiton.navigate(item.navigating)}>
              <LinearGradient
                style={[styles.optionContainer,{
                  padding:horizontalScale(15),
                  borderRadius:horizontalScale(5),
                  flex:1
                }]}
                colors={["#fff", Theme.black.secondary]}
                start={{x: 0, y: 8}}
              >
                <CustomText text={item.options} />
              </LinearGradient>
            </TouchableOpacity>
          )}
        />
      </View>
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profilePic: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionContainer: {
    borderWidth: 1,
    borderRadius: horizontalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
