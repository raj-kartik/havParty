import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Container from '../../Custom/Container';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../bottom/Home';
import Search from '../bottom/Search';
import Planner from '../bottom/Planner';
import Favorite from '../bottom/Favorite';
import Profile from '../bottom/Profile';
import CustomIcon from '../../Custom/CustomIcon';
import {moderateScale} from '../../Custom/Matrix';
import {Theme} from '../../theme/Color';
import * as Animatable from 'react-native-animatable';

const HomeBlank = ({navigation}) => {
  const TabArr = [
    {
      id: 1,
      route: 'Home',
      label: 'Home',
      type: 'AntDesign',
      icon: 'home',
      component: Home,
    },

    {
      id: 2,
      route: 'Search',
      label: 'Search',
      type: 'AntDesign',
      icon: 'search1',
      component: Search,
    },

    {
      id: 3,
      route: 'Planner',
      label: 'Planner',
      type: 'MaterialCommunityIcons',
      icon: 'party-popper',
      component: Planner,
    },

    {
      id: 4,
      route: 'Favorite',
      label: 'Favorite',
      type: 'Ionicons',
      icon: 'heart-circle',
      component: Favorite,
    },

    {
      id: 5,
      route: 'Profile',
      label: 'Profile',
      type: 'FontAwesome6',
      icon: 'circle-user',
      component: Profile,
    },
  ];

  const TabButton = props => {
    const animate1 = {
      0: {scale: 1, translateY: 0},
      1: {scale: 1.2, translateY:moderateScale(-20)},
    };
    const animate2 = {
      0: {scale: 1.2, translateY: moderateScale(0)},
      1: {scale: 1, translateY: 0},
    };
    const circle1 = {
      0: {scale: 0},
      0.3: {scale: 0.2},
      0.5: {scale: 0.3},
      0.8: {scale: 0.7},
      1: {scale: 1},
    };
    const circle2 = {0: {scale: 1}, 1: {scale: 0}};

    const {item, onPress, accessibilityState} = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const circleRef = useRef(null);

    useEffect(() => {
      if (focused) {
        viewRef.current.animate(animate1);
        circleRef.current.animate(circle1)
      } else {
        viewRef.current.animate(animate2);
        circleRef.current.animate(circle2)
      }
    }, [focused]);
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={1}>
        <Animatable.View
          ref={viewRef}
          style={styles.Btn}
          animation="zoomIn"
          duration={800}>
          <Animatable.View
            ref={circleRef}
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: Theme.primary,
              borderRadius: moderateScale(25),
            }}
          />
          <CustomIcon
            type={item.type}
            name={item.icon}
            size={30}
            color={focused ? Theme.penta : Theme.second.secondary}
          />
        </Animatable.View>
      </TouchableOpacity>
    );
  };

  const Tab = createBottomTabNavigator();
  return (
    <Container>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: moderateScale(50),
            position: 'absolute',
            bottom: moderateScale(16),
            left: moderateScale(16),
            right: moderateScale(16),
            borderRadius: moderateScale(10),
            backgroundColor:"#fff",
            borderColor:"#000"
          },
        }}>
        {TabArr.map(item => {
          return (
            <Tab.Screen
              key={item.id}
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarIcon: ({color, focused}) => (
                  <CustomIcon type={item.type} name={item.icon} size={30} />
                ),
                tabBarButton: props => <TabButton {...props} item={item} />,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </Container>
  );
};

export default HomeBlank;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Btn: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
    borderWidth: 3,
    borderColor: Theme.penta,
    backgroundColor:Theme.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});