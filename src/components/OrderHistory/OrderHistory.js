import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";

export default class OrderHistory extends Component {
    constructor(props) {
        super(props);

    }

    goBackToMain(){
        const {navigator} = this.props;
        navigator.pop();
    }

    render() {
        return (
            <View style={{flex:1, backgroundColor:'#DFF5C9'}}>
                <Text>OrderHistory</Text>
                <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                    <Text>Go Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}