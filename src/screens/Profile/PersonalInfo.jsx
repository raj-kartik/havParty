import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Container from '../../Custom/Container';
import CustomHeader from '../../Custom/CustomHeader';
import {Theme} from '../../theme/Color';
import * as Yup from 'yup';
import {Formik} from 'formik';
import CustomText from '../../Custom/CustomText';
import {GlobalStyles} from '../GlobalStyles/GlobalStyles';
import CustomButton from '../../Custom/CustomButton';
import {horizontalScale, moderateScale} from '../../Custom/Matrix';
import {Fonts} from '../../utils/Fonts';

const userSchema = Yup.object().shape({
  name: Yup.string()
    .required('*required')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  username: Yup.string()
    .required('*required')
    .matches(
      /^(?!.*\.\.)(?=^[a-z0-9._]{3,16}$)[a-z0-9][a-z0-9._]*[a-z0-9]$/,
      'invalid username',
    ),
  isAdult: Yup.boolean().required('*required'),
  email: Yup.string().email('Invalid email').required('*required'),
});

const PersonalInfo = () => {
  const [isAdultAge, setIsAdultAge] = useState(false);
  return (
    <Container>
      <CustomHeader title="Personal Information" primary={Theme.secondary} />

      <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center'}}>
        <ScrollView>
          <Formik
            initialValues={{
              email: '',
              username: '',
              name: '',
              isAdult: '',
            }}
            validationSchema={userSchema}
            onSubmit={values => console.log(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors,
            }) => (
              <View style={styles.formContainer}>
                {/* Username */}
                <View style={styles.inputContainer}>
                  <CustomText text="Username" />
                  <TextInput
                    autoCapitalize="none"
                    placeholder="_abc_"
                    style={GlobalStyles.input}
                    value={values.username}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                  />
                  {touched.username && errors.username && (
                    <CustomText
                      text={errors.username}
                      textColor={Theme.error.primary}
                    />
                  )}
                </View>

                {/* Email */}
                <View style={styles.inputContainer}>
                  <CustomText text="Email" />
                  <TextInput
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="abc@gmail.com"
                    style={GlobalStyles.input}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />
                  {touched.email && errors.email && (
                    <CustomText
                      text={errors.email}
                      textColor={Theme.error.primary}
                    />
                  )}
                </View>

                {/* Name */}
                <View style={styles.inputContainer}>
                  <CustomText text="Name" />
                  <TextInput
                    placeholder="ABC"
                    style={GlobalStyles.input}
                    value={values.name}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                  />
                  {touched.name && errors.name && (
                    <CustomText
                      text={errors.name}
                      textColor={Theme.error.primary}
                    />
                  )}
                </View>

                {/* is adult */}
                <View style={{marginVertical: moderateScale(20)}}>
                  <CustomText text="Are you adult?" />
                  <TouchableOpacity
                    onPress={() => setIsAdultAge(!isAdultAge)}
                    style={styles.toggleButton}>
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

                {/* Submit Button */}
                <CustomButton
                  onPress={handleSubmit}
                  customStyle={{
                    borderRadius: moderateScale(10),
                    marginVertical: moderateScale(10),
                  }}
                  title="Save"
                  textColor={Theme.text.primary}
                  textStyle={{fontSize: 28}}
                />
              </View>
            )}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  formContainer: {
    margin: moderateScale(20),
  },
  toggleButton: {
    width: moderateScale(80),
    height: moderateScale(40),
    backgroundColor: Theme.black.hexa,
    borderRadius: horizontalScale(200),
    marginTop: horizontalScale(5),
    justifyContent: 'center',
    padding: horizontalScale(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth:1,
    borderColor:"#ccc"
  },
  switchButton: {
    borderRadius: moderateScale(60),
    width: moderateScale(35),
    height: moderateScale(35),
  },
  inputContainer: {
    height: horizontalScale(100),
  },
});
