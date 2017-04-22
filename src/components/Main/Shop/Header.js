import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, TextInput, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {wrapper, row1, textInput, iconStyle,titleStyle} = styles;

    return (
      <View
        style={wrapper}
      >
        <View style={row1}>
          <TouchableOpacity onPress={this.props.onOpen}>
            <Image source={icMenu} style={iconStyle}/>
          </TouchableOpacity>
          <Text style={titleStyle}>Wearing a Dress</Text>
          <Image source={icLogo} style={iconStyle}/>
        </View>
        <TextInput placeholder="What do you want to buy?" style={textInput} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {height: height / 8,
        backgroundColor: '#34B089',
        padding: 10,
        justifyContent:'space-around'},
    row1: { flexDirection: 'row', justifyContent: 'space-between' },
    textInput: {height:height/20, backgroundColor:'#fff', paddingLeft: 10},
    titleStyle: {color:'#fff', fontFamily: 'Avenir', fontSize:15},
    iconStyle: {width:25,height:25}
});


