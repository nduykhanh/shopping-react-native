import React, {Component} from "react";
import {View, Text, Image, StyleSheet, Dimensions} from "react-native";
import bannerImage from '../../../../media/temp/banner.jpg';

const {width, height} = Dimensions.get('window');

export default class Collection extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {wrapper, textStyle,imagesStyle} = styles;
        return (
            <View style={wrapper}>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={textStyle}>SPRING COLLECTION</Text>
                </View>
                <View style={{flex:4, justifyContent:'flex-end' }}>
                <Image style={imagesStyle} source={bannerImage}/>
                </View>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) *465
const styles = StyleSheet.create({
    wrapper: {
        height: height*0.35,
        backgroundColor:'#fff',
        margin:10,
        shadowColor: "#2E272B",
        shadowOffset:{width:0,height:3},
        shadowOpacity: 0.2,
        padding:10,
        paddingTop: 0,
    },
    textStyle:{
        fontSize: 15,
        color: "#AFAFAF"
    },
    imagesStyle:{
        height:imageHeight, width:imageWidth
    }
});