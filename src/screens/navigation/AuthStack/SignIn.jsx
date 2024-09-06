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
import {useDispatch} from 'react-redux';
import {signinUser} from '../../../store/Slice/userSlice';
const SignIn = ({navigation}) => {
  const [input, setInput] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      await dispatch(
        signinUser({username: input.username, password: input.password}),
      );
    } catch (err) {
      console.error(err);
    }
  };

  console.log('--- input -----', input);

  return (
    <Container>
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView>
          <View style={styles.SignInContainer}>
            <Image
              source={Images.Logo}
              style={{width: screenWidth * 0.5, height: screenHeight * 0.35}}
            />
          </View>
          <View style={styles.signContainer}>
            <CustomInput
              values={input.username}
              autoCaptital="none"
              text="username or e-mail "
              handleChangeText={text => setInput({...input, username: text})}
            />
            <CustomInput
              values={input.password}
              handleChangeText={text => setInput({...input, password: text})}
              text="password"
              autoCaptital="none"
            />
            <CustomButton
              disabled={!input.username || !input.password}
              onPress={handleLogin}
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
    justifyContent: 'center',
  },
});
