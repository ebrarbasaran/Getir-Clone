import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import CategoryItem from '../../components/CategoryItem';
import categoriesGetir from '../../../assets/categoriesGetir';
import {Category} from '../../models/index';


function index() {
    const [categories, setCategories] = useState<Category[]>(categoriesGetir);
    return (
        <View style={styles.listContainer}>
                {
                    categories.map((item) => (
                        <CategoryItem key={item.id} item={item} />
                        
                    ))
                }
        </View>
    );
};

export default index;
