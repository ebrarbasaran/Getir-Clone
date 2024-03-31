import { StyleSheet,Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    crousel:{
        margin: 10,
        borderRadius: 10,
    },
    image: {
        width: width, 
        height: height * 0.25, 
        resizeMode: 'stretch'
    }
})