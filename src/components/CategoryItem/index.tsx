import * as React from 'react';
import {TouchableOpacity,Image,Text } from 'react-native';
import styles from './styles';
import { Category } from '../../models';


type categoryItemProps ={
    item:Category
}
function index({item}: categoryItemProps) {
    return(
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={{uri: item.src}}/>
            <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
    )
    
}
export default index;