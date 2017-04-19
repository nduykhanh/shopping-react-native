import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";

export default class Main extends Component {
    constructor(props) {
        super(props);

    }

    goToAuthentication(){
        const {navigator} = this.props;
        navigator.push({name:'AUTHENTICATION'});
    }

    goToChangeInfo(){
        const {navigator} = this.props;
        navigator.push({name:'CHANGE_INFO'});
    }

    goToOrderHistory(){
        const {navigator} = this.props;
        navigator.push({name:'OrderHistory'});
    }

    render() {
        return (
            <View style={{flex:1, backgroundColor:'#DFF5C9'}}>
                <Text>Main</Text>
                <TouchableOpacity onPress={this.goToAuthentication.bind(this)}>
                    <Text>Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToChangeInfo.bind(this)}>
                    <Text>Go to Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToOrderHistory.bind(this)}>
                    <Text>Go to Order History</Text>
                </TouchableOpacity>
            </View>
        );
    }
}