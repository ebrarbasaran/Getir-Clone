import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from "./styles";
import { Entypo } from '@expo/vector-icons';

function index() {
    return (
        <View style={styles.headerMain}>
            <View style={styles.headerOne}>
                <Image style={styles.image} source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }} />
                <View style={styles.headerOneView}>
                    <Text style={styles.homeText}>Ev</Text>
                    <Text style={styles.adressText}>Yeşilvadi mah. asude park evleri B blok</Text>
                    <Entypo name="chevron-right" size={22} color="#5D3EBD" />
                </View>

                <View style={styles.headerTwo}>
                    <Text style={styles.tvText}>Tvs</Text>
                    <Text style={styles.timeText}>
                        13<Text style={styles.minText}>dk</Text>
                    </Text>
                </View>
            </View>

        </View>
    )
}

export default index;