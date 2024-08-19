import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Container from '../../../Custom/Container';
import CustomText from '../../../Custom/CustomText';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {Images} from '../../../utils/Images';
import {horizontalScale, screenWidth} from '../../../Custom/Matrix';
import CustomInput from '../../../Custom/CustomInput';
import CustomButton from '../../../Custom/CustomButton';
import {Theme} from '../../../theme/Color';
import { Fonts } from '../../../utils/Fonts';
const userSchema = Yup.object().shape({
  name: Yup.string()
    .required('*required')
    .min(2, 'Enter your full name!')
    .max(10, 'Enter valid name')
    .matches(/^[a-zA-Z\-]+$/, 'Avoid using 0-9 and special character'),
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
  return (
    <Container>
      <View style={styles.SignInContainer}>
        <Image
          source={Images.Logo}
          style={{width: screenWidth * 0.5, height: screenWidth * 0.5}}
        />
      </View>

      <KeyboardAvoidingView
        style={{flex: 1, marginBottom: horizontalScale(10)}}>
        <ScrollView style={[{marginHorizontal: horizontalScale(10)}]}>
          <Formik
            initialValues={{name: '', username: '', email: '', password: ''}}
            validationSchema={userSchema}
            onSubmit={values => {
              console.log(values);
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
                  handleChangeText={handleChange('name')}
                />
                {errors.name && touched.name ? (
                  <CustomText
                    customStyle={styles.errorText}
                    textColor={Theme.text.primary}
                    text={errors.name}
                  />
                ) : null}

                <CustomInput handleChangeText={handleChange('username')} text="usename" />
                {errors.username && touched.username ? (
                  <CustomText
                    customStyle={styles.errorText}
                    textColor={Theme.text.primary}
                    fontFamily={Fonts.bold}
                    text={errors.username}
                  />
                ) : null}

                <CustomInput text="e-mail" handleChangeText={handleChange('email')} />
                {errors.email && touched.email ? (
                  <CustomText
                    customStyle={styles.errorText}
                    textColor={Theme.text.primary}
                    text={errors.email}
                  />
                ) : null}

                <CustomInput text="password" handleChangeText={handleChange('password')} />
                {errors.password && touched.password ? (
                  <CustomText
                    customStyle={styles.errorText}
                    textColor={Theme.text.primary}
                    text={errors.password}
                  />
                ) : null}

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
          <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}} >
            <CustomText
              text="Already have account? "
            />
            <TouchableOpacity onPress={()=>navigation.replace('SignIn')} >
              <CustomText
                text="Login"
                textColor={Theme.quartery}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  SignInContainer: {
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  errorText: {
    color: Theme.error.primary,
    fontSize: 12,
  },
});
