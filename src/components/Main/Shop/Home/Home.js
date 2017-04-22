import React, {Component} from "react";
import {View, Text} from "react-native";
import Collection from "./Collection"
import Category from "./Category"

export default class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{flex:1, backgroundColor: '#DBDBD8'}}>
                <Collection/>
                <Category/>
            </View>
        );
    }
}