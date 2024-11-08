import { StyleSheet } from "react-native";
import { Theme } from "../../theme/Color";
import { moderateScale } from "../../Custom/Matrix";
import { Fonts } from "../../utils/Fonts";

export const GlobalStyles = StyleSheet.create({
    row:{
        flexDirection:"row",
        alignItems:"center"
    },
    input:{
        borderWidth:1,
        borderColor:Theme.text.tertiary,
        borderRadius:moderateScale(5),
        fontFamily:Fonts.medium
    },
    center:{
        justifyContent:"center",
        alignItems:"center"
    },
    between:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})