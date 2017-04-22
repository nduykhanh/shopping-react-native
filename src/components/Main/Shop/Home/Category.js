import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import bannerImage from '../../../../media/temp/banner.jpg';
import Swipper from 'react-native-swiper';

import littleIcon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import partyIcon from '../../../../media/temp/party.jpg';

const { width, height } = Dimensions.get('window');

export default class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { wrapper, textStyle, imagesStyle, titleImage } = styles;
    return (
      <View style={wrapper}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={textStyle}>LIST OF CATEGORY</Text>
        </View>
        <View style={{ flex: 4, justifyContent:'flex-end' }}>
          <Swipper autoplay={true} width={imageWidth} height={imageHeight}>
            <Image style={imagesStyle} source={littleIcon}>
              <Text style={titleImage}>Maxi Dress 1</Text>
            </Image>
            <Image style={imagesStyle} source={maxiIcon}>
              <Text style={titleImage}>Maxi Dress 2</Text>
            </Image>
            <Image style={imagesStyle} source={partyIcon} >
              <Text style={titleImage}>Maxi Dress 3</Text>
            </Image>
          </Swipper>
        </View>
      </View>
    );
  }
}

const imageWidth = width - 40;
const imageHeight = imageWidth / 2;
const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.35,
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0
  },
  textStyle: {
    fontSize: 15,
    color: '#AFAFAF'
  },
  imagesStyle: {
    height: imageHeight,
    width: imageWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleImage: {
    fontSize: 15,
    fontFamily: 'Avenir',
    color: '#9A9A9A'
  }
});
