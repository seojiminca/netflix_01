//rsc
import React, {useLayoutEffect} from 'react';  //RN의 lifecycle 함수.
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons";
import {Platform} from "react-native";
import Movie from "../screens/Movies";
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import Favorite from '../screens/Favorite';

const Tabs = createBottomTabNavigator();

const getHeaderName = route =>
    route?.state?.routeNames[route.state.index] || "Movie";  // ?은 optional.

export default ({navigation, route}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: getHeaderName(route)
        });
    }, [route]);

    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName = Platform.OS === "ios" ? "ios-" : "md-";
                    if (route.name === "Movie") {
                        iconName += "film";
                    } else if (route.name === "TV") {
                        iconName += "tv";
                    } else if (route.name === "Search") {
                        iconName += "search";
                    } else if (route.name === "Favorite") {
                        iconName += "heart";
                    }
                    return (
                        <Ionicons
                            name={iconName}
                            color={focused ? "purple" : "grey"}
                            size={23}
                        />
                    );
                }
            })}

            tabBarOptions={{
                showLabel: true, /*tab bar의 텍스트 보여주기*/
                style: {
                    backgroundColor: 'black',
                    borderTopColor: 'grey'
                },
                activeTintColor: 'purple',
                inactiveTintColor: 'grey'
            }}
        >
            <Tabs.Screen name={"Movie"} component={Movie}/>
            <Tabs.Screen name={"TV"} component={Tv}/>
            <Tabs.Screen name={"Search"} component={Search}/>
            <Tabs.Screen name={"Favorite"} component={Favorite}/>
        </Tabs.Navigator>
    );
};
