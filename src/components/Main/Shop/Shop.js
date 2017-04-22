import React, {Component} from "react";
import {View, Text, TouchableOpacity, Dimensions, Image, StyleSheet} from "react-native";
import TabNavigator from 'react-native-tab-navigator';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header';

import homeIconS from '../../../media/appIcon/home.png';
import homeIcon from '../../../media/appIcon/home0.png';
import cartIconS from '../../../media/appIcon/cart.png';
import cartIcon from '../../../media/appIcon/cart0.png';
import searchIconS from '../../../media/appIcon/search.png';
import searchIcon from '../../../media/appIcon/search0.png';
import contactIconS from '../../../media/appIcon/contact.png';
import contactIcon from '../../../media/appIcon/contact0.png';

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab : 'home'
        }
    }

    openMenu(){
        const {open} = this.props;
        open();
    }

    render() {
        const{iconStyle} = styles;
        return (
            <View style={{flex:1}}>
            <Header onOpen={this.openMenu.bind(this)}/>
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image style={iconStyle} source={homeIcon} />}
                    renderSelectedIcon={() => <Image style={iconStyle} source={homeIconS} />}
                    selectedTitleStyle={{color:'#34B089'}}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Home/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'cart'}
                    title="Cart"
                    renderIcon={() => <Image style={iconStyle} source={cartIcon} />}
                    renderSelectedIcon={() => <Image style={iconStyle} source={cartIconS} />}
                    badgeText="1"
                    selectedTitleStyle={{color:'#34B089'}}
                    onPress={() => this.setState({ selectedTab: 'cart' })}>
                    <Cart/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'contact'}
                    title="Contact"
                    renderIcon={() => <Image style={iconStyle} source={contactIcon} />}
                    renderSelectedIcon={() => <Image style={iconStyle} source={contactIconS} />}
                    selectedTitleStyle={{color:'#34B089'}}
                    onPress={() => this.setState({ selectedTab: 'contact' })}>
                    <Contact/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'search'}
                    title="Search"
                    renderIcon={() => <Image style={iconStyle} source={searchIcon} />}
                    renderSelectedIcon={() => <Image style={iconStyle} source={searchIconS} />}
                    selectedTitleStyle={{color:'#34B089'}}
                    onPress={() => this.setState({ selectedTab: 'search' })}>
                    <Search/>
                </TabNavigator.Item>
            </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   iconStyle:{
       width:20, height:20
   }
});