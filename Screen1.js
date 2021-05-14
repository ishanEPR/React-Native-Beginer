import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

export default class screen1 extends Component{

    render()
    {
        return(
            <View>
                <Text style={{textAlign:'center',fontSize:20}}>screen</Text>
                <Button title="show"></Button>
            </View>
        );
    }
}