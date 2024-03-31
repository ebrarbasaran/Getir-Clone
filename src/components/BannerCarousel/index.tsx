import React, { useState } from 'react';
import { FlatList, Image } from 'react-native';
import styles from './styles';



function index() {
    const [banners, setBanners] = useState<String[]>([
        "https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg",
        "https://cdn.getir.com/misc/622a6d18b2e2fe3a8e809894_banner_tr_1646947639211.jpeg",
        "https://banner-marketing-cdn.getir.com/images/85609363-5e25-425d-aa5c-0828288efc4f.jpeg",
        "https://banner-marketing-cdn.getir.com/images/c43f303c-76c4-4a68-8318-9ddcd5ef5383.jpg",
        "https://banner-marketing-cdn.getir.com/images/7879daef-7041-4a75-80dd-ef6ee9b77e26.jpeg"
    ]);


    return (
        <FlatList
            data={banners}
            renderItem={(item) => (
                <Image
                    source={{ uri: item.item }}
                    style={styles.image}
                />
            )}
            style = {styles.crousel}
            horizontal
            showsHorizontalScrollIndicator = {false}
            decelerationRate={'fast'}
        ></FlatList>
    )

}

export default index;