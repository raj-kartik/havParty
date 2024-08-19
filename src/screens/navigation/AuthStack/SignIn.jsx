import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import Container from '../../../Custom/Container';
import CustomText from '../../../Custom/CustomText';
import {Images} from '../../../utils/Images';
import {
  horizontalScale,
  screenHeight,
  screenWidth,
  moderateScale,
  verticalScale,
} from '../../../Custom/Matrix';
import CustomInput from '../../../Custom/CustomInput';
import CustomIcon from '../../../Custom/CustomIcon';
import CustomButton from '../../../Custom/CustomButton';
import {Theme} from '../../../theme/Color';
const SignIn = ({navigation}) => {
  const [input, setInput] = useState({
    username: '',
    password: '',
  });
  return (
    <Container>
      <KeyboardAvoidingView style={{flex:1}} >
        <ScrollView>
          <View style={styles.SignInContainer}>
            <Image
              source={Images.Logo}
              style={{width: screenWidth * 0.5, height: screenWidth * 0.5}}
            />
          </View>
          <View style={styles.signContainer}>
            <CustomInput text="username" />
            <CustomInput text="password" />
            <CustomButton
              customStyle={{
                borderRadius: horizontalScale(10),
                marginVertical: horizontalScale(10),
              }}
              title="Login"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CustomText text="Do not have account? " />
            <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
              <CustomText text="Sign Up" textColor={Theme.quartery} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  SignInContainer: {
    alignItems: 'center',
  },
  signContainer: {
    marginHorizontal: moderateScale(10),
    justifyContent:"center",
  },
});
