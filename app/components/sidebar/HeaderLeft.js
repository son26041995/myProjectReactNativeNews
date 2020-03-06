import React, {useState} from 'react';
import {ActivityIndicator, Dimensions, FlatList, Platform, StyleSheet, Text, View} from 'react-native';

import axios from 'axios';

//ANIMATION VARIABLES
const SCREEN_HEIGHT = Dimensions.get('window').height;
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.select({ios: IS_IPHONE_X ? 44 : 20, android: 24});

export default function HeaderLeft(props) {
    const {navigate} = props.navigation;

    return (
        <View style={{backgroundColor: "#ffff", flex: 1,}}>
            <TouchableOpacity {...props}>
                <IOSIcon name="ios-menu" size={30} />
            </TouchableOpacity>
        </View>
    )
};


HeaderLeft.navigationOptions = screenProps => ({
    header: null
});