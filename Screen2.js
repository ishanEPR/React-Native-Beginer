import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

export default class screen2 extends Component{

    show=()=>
    {
        this.props.navigation.navigate('S1');
    }
    render()
    {
        return(
            <View>
                <Text style={{textAlign:'center',fontSize:20}}>screen</Text>
                <Button title="click" onPress={this.show}/>
                 
            </View>
        );
    }
}