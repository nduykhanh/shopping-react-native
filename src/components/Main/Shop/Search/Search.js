import React, {Component} from "react";
import {View, Text} from "react-native";

export default class Search extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{flex:1, backgroundColor: '#E74428'}}>
                <Text>tab search</Text>
            </View>
        );
    }
}