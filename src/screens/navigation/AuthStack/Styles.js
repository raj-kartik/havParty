import { StyleSheet } from "react-native";
import { Theme } from "../../../theme/Color";
import { horizontalScale, moderateScale, screenHeight, screenWidth, verticalScale } from "../../../Custom/Matrix";
import { Fonts } from "../../../utils/Fonts";
export const styles = StyleSheet.create({
    SignInContainer: {
      alignItems: 'center',
    },
    input: {
      paddingHorizontal: 15,
      color: '#fff',
      fontFamily: Fonts.regular,
      borderWidth: 1,
      borderRadius: horizontalScale(8),
      textAlign: 'auto',
    },
    errorText: {
      color: Theme.error.primary,
      fontSize: 12,
    },
    toggleButton: {
      width: moderateScale(80),
      height: moderateScale(40),
      // backgroundColor: Theme.black.hexa,
      borderRadius: horizontalScale(200),
      marginTop: horizontalScale(5),
      justifyContent: 'center',
      padding: horizontalScale(5),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: '#ccc',
    },
    switchButton: {
      borderRadius: moderateScale(60),
      width: moderateScale(35),
      height: moderateScale(35),
    },
    optionView: {
      borderWidth: 1,
      borderColor: Theme.black.hexa,
      padding: horizontalScale(10),
      marginTop: horizontalScale(10),
      borderRadius: horizontalScale(5),
      backgroundColor: Theme.black.hexa,
    },
  });
  