import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";

export default class Menu extends Component {
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
        const {navigator} = this.props;
        
        return (
            <View style={{flex:1, backgroundColor:"white"}}>
                <Text>
                    Component Menu 
                </Text>
                <TouchableOpacity onPress={this.goToAuthentication.bind(this)}>
                    <Text>Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToChangeInfo.bind(this)}>
                    <Text>Go to ChangeInfo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToOrderHistory.bind(this)}>
                    <Text>Go to OrderHistory</Text>
                </TouchableOpacity>
            </View>
        );
    }
}