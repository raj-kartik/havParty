import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Container from '../../Custom/Container';
import CustomText from '../../Custom/CustomText';
import {horizontalScale} from '../../Custom/Matrix';
import {Theme} from '../../theme/Color';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../Custom/CustomButton';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../Custom/CustomHeader';
import {useDispatch} from 'react-redux';
import {logout} from '../../store/Slice/userSlice';

const Profile = () => {
  const [selectedId, setSelectedId] = useState(null);
  const navigaiton = useNavigation();
  const profileOptions = [
    {id: 1, options: 'Personal Information', navigating: 'Personal'},
    {id: 2, options: 'Transactions', navigating: 'Transaction'},
    {id: 3, options: 'Account Settings', navigating: 'AccSetting'},
    {id: 4, options: 'Notification', navigating: 'Notification'},
    {id: 5, options: 'Support', navigating: 'Support'},
    {id: 6, options: 'Contact Us', navigating: 'ContactUs'},
  ];
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const isLogout = await dispatch(logout());
      if (isLogout) {
        console.log('-- log out has been successfull ----');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handlePress = id => {
    setSelectedId(id);
  };

  return (
    <Container>
      <CustomHeader title="Setting" primary={Theme.red.secondary} />

      <View>
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
                  margin: horizontalScale(10),
                },
              ]}
              onPress={() => navigaiton.navigate(item.navigating)}>
              <LinearGradient
                style={[
                  styles.optionContainer,
                  {
                    padding: horizontalScale(15),
                    borderRadius: horizontalScale(5),
                    flex: 1,
                  },
                ]}
                colors={['#fff', Theme.black.secondary]}
                start={{x: 0, y: 8}}>
                <CustomText text={item.options} />
              </LinearGradient>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          style={[
            styles.optionContainer,
            {
              backgroundColor: Theme.secondary,
              margin: horizontalScale(10),
            },
          ]}
          onPress={handleLogout}>
          <LinearGradient
            style={[
              styles.optionContainer,
              {
                padding: horizontalScale(15),
                borderRadius: horizontalScale(5),
                flex: 1,
              },
            ]}
            colors={['#fff', Theme.black.secondary]}
            start={{x: 0, y: 8}}>
            <CustomText text="Log out" />
          </LinearGradient>
        </TouchableOpacity>
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
