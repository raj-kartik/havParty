import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import { Theme } from '../theme/Color';
const LoadingIndicator = ({loading}) => {
  if (!loading) return null;
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size={'large'} color={Theme.red.secondary} />
    </View>
  );
};

export default LoadingIndicator;