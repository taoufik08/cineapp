import 'react-native-gesture-handler';
import React from 'react';
import { View,Image } from 'react-native';
import { AppLoading } from 'expo';
import { Container, ScrollView, Header,Card, CardItem, Thumbnail, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Navigation from './Navigation/Navigation'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  _onPressButton() {
    alert('You tapped the button!')
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Navigation/>

    );
  }
}
