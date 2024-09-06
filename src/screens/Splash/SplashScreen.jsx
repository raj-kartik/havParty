import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Container from '../../Custom/Container';
import {Images} from '../../utils/Images';
import * as Animatable from 'react-native-animatable';
import {useSelector} from 'react-redux';
import {screenWidth} from '../../Custom/Matrix';

const SplashScreen = ({navigation}) => {
  const isAuth = useSelector(state => state.user?.isAuthUser);
  setTimeout(() => {
    isAuth?navigation.navigate('HomeBlank'):navigation.navigate('SignIn');
  },2000);

  return (
    <Container customStyle={styles.container}>
      <Animatable.Image
        source={Images.Logo}
        style={styles.imageView}
        animation="pulse"
        easing="ease-out"
        duration={5000}
        iterationCount="infinite"
      />
    </Container>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  imageView: {
    width: screenWidth,
    height: screenWidth,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
