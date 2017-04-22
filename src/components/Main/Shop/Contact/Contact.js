import React, {Component} from "react";
import {View, Text} from "react-native";

export default class Contact extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{flex:1, backgroundColor: '#E74428'}}>
                <Text>tab contact</Text>
            </View>
        );
    }
}