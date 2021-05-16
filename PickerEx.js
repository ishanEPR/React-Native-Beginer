import React,{Component} from 'react';
import {View,Picker} from 'react-native';
export default class PickerEx extends Component
{
    constructor()
    {
        super();
        this.state={selectedLabel: ''};
    }

    show=(value)=>
    {
        alert(value);
        this.setState({selectedLabel:value});
    }

    render()
    {
        return(
            <View>
                <Picker
                    selectedValue={this.state.selectedLabel}
                    onValueChange={this.show.bind()}
                >
                    <Picker.Item label="Select a Course" value="0" color="#ff0000"></Picker.Item>
                    <Picker.Item label="React" value="8000"></Picker.Item>
                    <Picker.Item label="PHP" value="7000"></Picker.Item>
                    <Picker.Item label="HTML" value="6000"></Picker.Item>

                </Picker>    
            </View>
        );
    }
}