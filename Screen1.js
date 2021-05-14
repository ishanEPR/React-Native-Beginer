import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

export default class screen1 extends Component{


    show=()=>
    {
        this.props.navigation.navigate('S2');
    }

    render()
    {
        return( 
            <View>
                <Text style={{textAlign:'center',fontSize:20}}>screen</Text>
                <Button title="show" onPress={this.show}></Button>
            </View>
        );
    }
}