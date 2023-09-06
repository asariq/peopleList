import { Dimensions,Platform } from "react-native";

export const {height:windowHeight,width:windowWidth}=Dimensions.get("window")

export const regx=/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/

export const isIos = () => {
    return Platform.OS === "ios";
};

export const IMAGES = {
    star_border:require('../assets/images/star_border.png'),
    star:require('../assets/images/star.png'),
    line:require('../assets/images/line.png'),
    add_circle_outline:require('../assets/images/add_circle_outline.png')

}