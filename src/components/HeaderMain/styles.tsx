import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    headerMain: {
        height: height * 0.064,
        backgroundColor: '#F7D102',
    },
    headerOne: {
        backgroundColor: 'white',
        width: '80%',
        height: height * 0.064,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '3%',
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
    },
    headerOneView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
        paddingLeft: 8,
        borderLeftColor: '#F3F2FD',
        borderLeftWidth: 2,
    },
    image: {
        width: 30,
        height: 30,
    },
    homeText: {
        fontWeight: '600',
        fontSize: 16,
    },
    adressText: {
        fontWeight: '500',
        fontSize: 11.5,
        color: '#6E7480',
        marginLeft: 6,
        marginRight: 3,
    },
    headerTwo: {
        //backgroundColor: 'green',
        width: '20%',
        height: height * 0.064,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        marginLeft: 10,
    },
    tvText: { 
        fontSize: 10,
        color: '#5D3EBD', 
        fontWeight: 'bold', 
        textAlign: 'center' 
    },
    timeText: { 
        fontSize: 20, 
        color: '#5D3EBD', 
        fontWeight: 'bold', 
        textAlign: 'center' 
    },
    minText: {
        fontSize: 16, 
        color: '#5D3EBD', 
        fontWeight: 'bold', 
        textAlign: 'center' 
    },
})

export default styles;