import React,{Component} from "react";
import {View,Button,Text} from 'react-native';

export default class screen4 extends Component
{
  render()
  {
    return(
      <View
      style={{flex:1,justifyContent:'center',padding:10}}>
      <Text>This is your Name {this.props.navigation.state.params.P1}</Text>
      </View>
    );
  }
}