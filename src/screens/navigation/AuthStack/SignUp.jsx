import {
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Container from '../../../Custom/Container';
import CustomText from '../../../Custom/CustomText';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {Images} from '../../../utils/Images';
import {
  horizontalScale,
  moderateScale,
  screenWidth,
} from '../../../Custom/Matrix';
import CustomInput from '../../../Custom/CustomInput';
import CustomButton from '../../../Custom/CustomButton';
import {Theme} from '../../../theme/Color';
import {Fonts} from '../../../utils/Fonts';
import CustomIcon from '../../../Custom/CustomIcon';
import {GlobalStyles} from '../../GlobalStyles/GlobalStyles';
import {useDispatch} from 'react-redux';
import {signupUser} from '../../../store/Slice/userSlice';
import LoadingIndicator from '../../../Component/LoadingIndi';
import { styles } from './Styles';
import { useNavigation } from '@react-navigation/native';
const userSchema = Yup.object().shape({
  name: Yup.string()
    .required('*required')
    .min(2, 'Enter your full name!')
    .max(10, 'Enter valid name')
    .matches(/^[a-zA-Z\- ]+$/, 'Avoid using 0-9 and special characters except spaces and hyphens'),
  username: Yup.string()
    .required('*required')
    .matches(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/, 'Enter valid username'),
  email: Yup.string().required('*required').email('Enter valid email-id'),
  password: Yup.string()
    .required('*required')
    .min(6, 'Keep your password strong')
    .max(25, 'Very strong password!'),
  gender: Yup.string(),
  isAdult: Yup.boolean(),
});

const SignUp = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [secure, setSecure] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isAdultAge, setIsAdultAge] = useState(false);
  const [genderSelect, setgenderSelect] = useState('');
  const [isGender, setIsGender] = useState(false);
  const dispatch = useDispatch();
  const handleSignup = async values => {
    try {
      setLoading(true);
      const response = await dispatch(signupUser(values));
      if (response) {
        navigation.navigate('Splash');
      }
    } catch (err) {
      console.error("--- errror in signup catch ---", err);
    }
    setLoading(false);
  };

  return (
    <Container>
      <View style={styles.SignInContainer}>
        <Image
          source={Images.Logo}
          style={{width: screenWidth * 0.25, height: screenWidth * 0.25}}
        />
      </View>

      <KeyboardAvoidingView
        style={{flex: 1, marginBottom: horizontalScale(10)}}>
        <ScrollView style={[{marginHorizontal: horizontalScale(10)}]}>
          <Formik
            initialValues={{name: '', username: '', email: '', password: ''}}
            validationSchema={userSchema}
            onSubmit={values => {
              handleSignup({
                name:values?.name,
                username:values?.username,
                gender: genderSelect,
                isAdult: isAdultAge,
                email:values?.email,
                password:values?.password
              });
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <CustomInput
                  text="name"
                  handleChangeText={text => handleChange('name')(text.trim())}
                />
                {errors.name && touched.name ? (
                  <CustomText
                    customStyle={styles.errorText}
                    textColor={Theme.text.primary}
                    text={errors.name}
                  />
                ) : null}

                <CustomInput
                  handleChangeText={text =>
                    handleChange('username')(text.trim())
                  }
                  autoCaptital="none"
                  text="username"
                />
                {errors.username && touched.username ? (
                  <CustomText
                    customStyle={styles.errorText}
                    textColor={Theme.text.primary}
                    fontFamily={Fonts.bold}
                    text={errors.username}
                  />
                ) : null}

                <CustomInput
                  text="e-mail"
                  handleChangeText={text => handleChange('email')(text.trim())}
                  autoCaptital="none"
                  keyboardType="email-address"
                />
                {errors.email && touched.email ? (
                  <CustomText
                    customStyle={styles.errorText}
                    textColor={Theme.error.secondary}
                    fontFamily={Fonts.bold}
                    text={errors.email}
                  />
                ) : null}

                <View style={{marginVertical: moderateScale(15)}}>
                  <CustomText text="password" />
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TextInput
                      secureTextEntry={secure}
                      onChangeText={text =>
                        handleChange('password')(text.trim())
                      }
                      style={[
                        styles.input,
                        {
                          borderColor: isFocused
                            ? Theme.secondary
                            : Theme.second.primary,
                          color: Theme.text.primary,
                          fontFamily: Fonts.bold,
                          flex: 0.85,
                        },
                      ]}
                    />
                    <TouchableOpacity
                      onPress={() => setSecure(!secure)}
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 0.15,
                      }}>
                      <CustomIcon
                        type="FontAwesome6"
                        name={secure ? 'eye' : 'eye-slash'}
                        color={Theme.text.tertiary}
                      />
                    </TouchableOpacity>
                  </View>
                  {errors.password && touched.password ? (
                    <CustomText
                      customStyle={styles.errorText}
                      textColor={Theme.text.primary}
                      text={errors.password}
                    />
                  ) : null}
                </View>

                {/* gender */}
                <View
                  style={{
                    height: horizontalScale(100),
                    zIndex: 9,
                    backgroundColor: Theme.primary,
                  }}>
                  <CustomText text="Gender" />
                  <TouchableOpacity
                    onPress={() => setIsGender(!isGender)}
                    activeOpacity={0.7}
                    style={[
                      GlobalStyles.input,
                      GlobalStyles.row,
                      {
                        paddingVertical: moderateScale(15),
                        paddingHorizontal: moderateScale(5),
                        justifyContent: 'space-between',
                      },
                    ]}>
                    <CustomText
                      text={genderSelect ? genderSelect : 'Select Gender'}
                    />
                    <CustomIcon
                      type="Entypo"
                      name={!isGender ? 'chevron-down' : 'chevron-up'}
                      color={Theme.icon.secondary}
                    />
                  </TouchableOpacity>
                  {isGender && (
                    <View
                      style={{
                        backgroundColor: Theme.primary,
                        paddingVertical: horizontalScale(10),
                      }}>
                      <TouchableOpacity
                        style={styles.optionView}
                        onPress={() => {
                          setgenderSelect('Male');
                          setIsGender(false);
                        }}>
                        <CustomText text="Male" />
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.optionView}
                        onPress={() => {
                          setgenderSelect('Female');
                          setIsGender(false);
                        }}>
                        <CustomText text="Female" />
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.optionView}
                        onPress={() => {
                          setgenderSelect('LGBTQA+');
                          setIsGender(false);
                        }}>
                        <CustomText text="LGBTQA+" />
                      </TouchableOpacity>
                    </View>
                  )}
                  {!genderSelect && (
                    <CustomText
                      text={errors.gender}
                      textColor={Theme.error.primary}
                    />
                  )}
                </View>

                {/* is adult button */}
                <View style={{marginVertical: moderateScale(20)}}>
                  <CustomText text="Are you adult?" />
                  <TouchableOpacity
                    onPress={() => setIsAdultAge(!isAdultAge)}
                    style={[
                      styles.toggleButton,
                      {
                        backgroundColor: isAdultAge
                          ? Theme.red.secondary
                          : Theme.black.hexa,
                      },
                    ]}>
                    {!isAdultAge ? (
                      <View
                        style={[
                          styles.switchButton,
                          {backgroundColor: Theme.black.secondary},
                        ]}
                      />
                    ) : (
                      <View style={[styles.switchButton]} />
                    )}

                    {isAdultAge ? (
                      <View
                        style={[
                          styles.switchButton,
                          {backgroundColor: Theme.text.secondary},
                        ]}
                      />
                    ) : null}
                  </TouchableOpacity>
                </View>

                <CustomButton
                  onPress={handleSubmit}
                  title="Sign Up"
                  customStyle={{
                    borderRadius: horizontalScale(10),
                    marginTop: horizontalScale(10),
                  }}
                />
              </>
            )}
          </Formik>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CustomText text="Already have account? " />
            <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
              <CustomText text="Login" textColor={Theme.quartery} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <LoadingIndicator loading={loading} />
    </Container>
  );
};

export default SignUp;

