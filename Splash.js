import React,{Component} from 'react';
import {View,Image,ImageBackground} from 'react-native';

var bg=require('./back.jpg');

var logo=require('./logo.jpg');

export default Splash extends Component
{
    render()
    {
        return(
            <ImageBackground
            source={bg}
            style={{height:'100%',weight:'100%'}}>
                <View
                style={{justifyContent:'center',flex:1,alignItems:'center'}}>
                    <Image
                    source={logo}
                    style={{height:'100%',weight:'100%'}}>
                    </Image>
                
                
                </View>
            
            
            </ImageBackground>
        );
    }
}
