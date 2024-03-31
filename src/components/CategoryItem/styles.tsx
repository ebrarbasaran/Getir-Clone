import { StyleSheet,Dimensions } from 'react-native';


const {width,height} = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        width: width*0.25,
        height: width*0.25,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    image: {
        width: width * 0.18, 
        height: width * 0.18,
        borderRadius:  6,
    },
    text:{
        fontSize: 12,
        color: '#616161',
        fontWeight: '500',
    },
})