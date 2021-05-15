import React,{Component} from 'react';
import {View,Text} from 'react=native';

export default class Home_B extends Component
{

    render()
    {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

                <Text style={{fontSize:40}}>Home Bottom Navigation</Text>
            </View>
        );
    }
}