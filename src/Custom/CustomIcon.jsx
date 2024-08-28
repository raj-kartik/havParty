import React from 'react';
import {StyleSheet} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Zocial from 'react-native-vector-icons/Zocial';

// Map icon set names to their respective components
const iconSets = {
  MaterialIcons,
  FontAwesome,
  FontAwesome6,
  Ionicons,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome5,
  Fontisto,
  Foundation,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
  AntDesign
};

const CustomIcon = ({type, name, size = 24, color = '#000', customStyle}) => {
  const IconComponent = iconSets[type];

  if (!IconComponent) {
    console.error(`Icon type '${type}' is not supported.`);
    return null;
  }

  return (
    <IconComponent
      name={name}
      size={size}
      color={color}
      style={customStyle}
    />
  );
};


export default CustomIcon;