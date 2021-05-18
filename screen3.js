import React,{Component} from "react";
import {View,TextInput,Button,Text} from 'react-native';

export default class screen3 extends Component
{
    constructor(props)
    {
        super(props);
        this.state={username:''};
    }
  render()
  {
    return(
      <View
      style={{flex:1,justifyContent:'center',padding:10}}>
        <TextInput
        placeholder="Enter User Name"
        style={{borderBottomWidth:1,borderBottomColor:'#ff0000',marginBottom:20}}
        onChangeText={username=>this.setState({username})}></TextInput>

        <Button
        title='Login'
        onPress={()=>this.props.navigation.navigate('screen4',{P1:this.state.username})}/>
      </View>
    );
  }
}