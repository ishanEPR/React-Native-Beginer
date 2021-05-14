import React,{Component} from 'react';
import {View,Button,TextInput} from 'react-native';


export default class Demo extends Component
{

    constructor(props)
    {
        super(props);
        this.state={Num1:0,Num2:0};
    }

    F1=()=>
    {
        var num1=parseInt(this.state.Num1);
        var num2=parseInt(this.state.Num2);
        var R=num1+num2;
        alert(R);
    }

    render()
    {
        return(
            <View>
                  <TextInput style={{borderWidth:1,margin:10}} placeholder="Num1" onChangeText={Num1->this.setState({Num1})} ></TextInput>
                   <TextInput style={{borderWidth:1,margin:10}} placeholder="Num2" onChangeText={Num2->this.setState({Num2})}></TextInput>
                   <Button title="Sum" onPress={this.F1}/>  
            </View>
        );
    }
}