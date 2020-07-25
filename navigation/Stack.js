//rsc
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from "../navigation/Tabs";
import Detail from '../screens/Detail';

const Stack = createStackNavigator();

export default () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "black",
                    borderBottomColor: "black",
                    shadowColor: "black"
                },
                headerTintColor: "white",
                headerBackTitleVisible: false
            }}
        >
            <Stack.Screen name={"Tabs"} component={Tabs}/>
            <Stack.Screen name={"Detail"} component={Detail}/>
        </Stack.Navigator>
    );
};

