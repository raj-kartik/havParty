import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Container from '../../Custom/Container';
import CustomHeader from '../../Custom/CustomHeader';
import {Image} from 'react-native-animatable';
import {
  horizontalScale,
  moderateScale,
  screenHeight,
  screenWidth,
} from '../../Custom/Matrix';
import CustomText from '../../Custom/CustomText';
import {Fonts} from '../../utils/Fonts';
import {Theme} from '../../theme/Color';
import CustomIcon from '../../Custom/CustomIcon';
import {useNavigation} from '@react-navigation/native';
import {GlobalStyles} from '../GlobalStyles/GlobalStyles';

const AboutBar = props => {
  const params = props.route.params;
  const [isViewMore, setIsViewMore] = useState(false);
  const navigation = useNavigation();

  const renderOffers = ({item}) => {
    return (
      <View style={styles.offerContainer}>
        <CustomText
          text={item.offer}
          fontFamily={Fonts.bold}
          customStyle={{fontSize: 16}}
        />
      </View>
    );
  };

  const renderMenu = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Menu', {item: item})}
        activeOpacity={1}
        style={{
          height: screenWidth * 0.5,
          width: screenWidth * 0.7,
          marginRight: horizontalScale(20),
          borderRadius: horizontalScale(10),
        }}>
        <ImageBackground
          source={item?.data[0]}
          imageStyle={[styles.menuImage]}
          style={[styles.menuImage]}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.6)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CustomText
              text={item.title}
              textColor={Theme.text.tertiary}
              customStyle={{
                fontSize: 60,
              }}
              fontFamily={Fonts.Haniston}
            />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const menuData = Object.keys(params.bar.menu).map(category => ({
    title: category.charAt(0).toUpperCase() + category.slice(1),
    data: params.bar.menu[category],
  }));
  return (
    <Container>
      <View style={{position: 'relative'}}>
        <CustomHeader
          title={params?.bar?.name}
          isBack={true}
          customStyle={{position: 'absolute'}}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={params.bar.photos}
          key={item => item.id}
          renderItem={({item}) => {
            return <Image source={item} style={styles.barImage} />;
          }}
        />
      </View>
      <ScrollView
        style={{marginHorizontal: horizontalScale(10)}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.headingStyle}>
          <View>
            <CustomText
              text={params.bar.name}
              customStyle={{
                fontSize: 32,
              }}
              fontFamily={Fonts.JosefinSans.Elight}
            />

            <CustomText
              text={` ${params.bar.add1}, ${params.bar.city},${params.bar.state}`}
              customStyle={{
                fontSize: 12,
              }}
              textColor={Theme.text.tertiary}
              fontFamily={Fonts.bold}
            />
          </View>
          <View style={GlobalStyles.row}>
            {isViewMore && (
              <View style={[styles.optionView, GlobalStyles.row]}>
                <View style={styles.optionSubView}>
                  <CustomIcon
                    type="AntDesign"
                    name="star"
                    color={Theme.icon.primary}
                    size={20}
                  />
                  <CustomText
                    text={params.bar.rating.toFixed(1)}
                    customStyle={{fontSize: 10}}
                  />
                </View>

                <TouchableOpacity style={styles.optionSubView}>
                  <CustomIcon
                    type="AntDesign"
                    name="heart"
                    color={Theme.text.primary}
                    size={20}
                  />
                  <CustomText text="like" customStyle={{fontSize: 10}} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionSubView}>
                  <CustomIcon
                    type="FontAwesome6"
                    name="calendar-week"
                    color={Theme.text.primary}
                    size={20}
                  />
                  <CustomText text="events" customStyle={{fontSize: 10}} />
                </TouchableOpacity>
              </View>
            )}

            <TouchableOpacity
              style={styles.favView}
              onPress={() => {
                setIsViewMore(!isViewMore);
              }}>
              <CustomIcon
                type="FontAwesome6"
                name={isViewMore?'xmark':'plus'}
                color={Theme.icon.secondary}
                size={horizontalScale(20)}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* offers */}
        <FlatList
          data={params.bar.offers}
          key={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderOffers}
        />

        {/* menus */}
        <View>
          <CustomText
            text="Menu"
            fontFamily={Fonts.bold}
            customStyle={{fontSize: 24}}
          />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={menuData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderMenu}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default AboutBar;

const styles = StyleSheet.create({
  barImage: {
    width: screenWidth,
    height: screenHeight * 0.4,
  },
  headingStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  offerContainer: {
    width: screenWidth * 0.9,
    height: screenWidth * 0.25,
    padding: horizontalScale(15),
    justifyContent: 'center',
    backgroundColor: Theme.secondary,
    marginVertical: horizontalScale(20),
    marginHorizontal: horizontalScale(5),
    borderRadius: horizontalScale(10),
    elevation: 5,
  },
  menuImage: {
    flex: 1,
    borderRadius: horizontalScale(10),
  },
  favView: {
    alignItems: 'center',
    marginHorizontal: horizontalScale(10),
    backgroundColor: Theme.secondary,
    width: horizontalScale(30),
    height: horizontalScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(100),
    position: 'relative',
  },
  optionView: {
    justifyContent: 'space-between',
    backgroundColor: 'rgba(84, 82, 82, 0.6)',
    paddingVertical: moderateScale(5),
    borderRadius: horizontalScale(30),
    position: 'absolute',
    right: horizontalScale(50),
  },
  optionSubView: {
    width: moderateScale(50),
    height: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:horizontalScale(5),
    padding: horizontalScale(2),
    backgroundColor: Theme.primary,
    borderRadius: horizontalScale(100),
  },
});
