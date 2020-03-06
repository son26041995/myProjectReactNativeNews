import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, TouchableOpacity} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack';

import {Icon} from 'react-native-elements';
import {BorderlessButton} from 'react-native-gesture-handler';

//IMPORT SCENES
import DashBoardScreen from "./scenes/dashboard/DashBoard";
import TouchableMenuIcon from "./components/sidebar/TouchableMenuIcon";
import SideMenu from "./components/sidebar/SideMenu";
import ArticlesScreen from "./scenes/dashboard/Articles";
import ArticleScreen from "./scenes/dashboard/Article";
import SearchScreen from "./scenes/dashboard/Search";
import IOSIcon from "react-native-vector-icons/Ionicons";

//ROUTES CONFIG ====================================================

let font = Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto';
let size = Platform.OS === 'ios' ? 24 : 25;
let titleColor = '#363434';
let iconColor = '#808689';

//Nav Header Styles
let headerStyle = {backgroundColor: '#fff'};
let headerTitleStyle = {fontWeight: 'bold', fontSize: 17, fontFamily: font, color: titleColor};

//Nav Buttons
let SearchBtn = (props) => (
    <BorderlessButton {...props} style={styles.wrapper}>
        <Icon type={`ionicon`} name={"md-search"} size={size} color={iconColor}/>
    </BorderlessButton>
);

//ROUTES STACK ====================================================


let SidebarMenuBtn = (props) => (
    <TouchableOpacity {...props}>
        <IOSIcon name="ios-menu" size={30} />
    </TouchableOpacity>
);

const DashboardStack = createStackNavigator(
    {
        DashBoard: DashBoardScreen,
        Articles: ArticlesScreen,
        Article: ArticleScreen,
        Search: SearchScreen,
        SideMenu: SideMenu
    },
    {
        initialRouteName: 'DashBoard',
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle, headerTitleStyle,
            headerRight: (<SearchBtn onPress={() => navigation.navigate('Search')}/>),
            headerLeft: (<SidebarMenuBtn onPress={() => navigation.navigate('SideMenu')}/>)
        })
    }
);

//ROUTER ====================================================
const Router = createAppContainer(DashboardStack);
// const Router = createDrawerNavigator(  
//   {
//     RootStack: DashboardStack,
//   },
//   {
//     contentComponent: SideMenu
//   }
// );
export default Router;

const styles = StyleSheet.create({
    wrapper: {
        height: 44,
        width: 44 + 6,
        justifyContent: "center",
        alignItems: "center"
    }
});