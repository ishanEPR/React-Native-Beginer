import React,{Component} from 'react';
import {View,Image,ImageBackground} from 'react-native';

var bg=require('./back.jpg');

var logo=require('./logo.jpg');

export default Splash extends Component
{

    constructor(props)
    {
        super(props);
        setTimeout(() => {
            this.props.navigation.navigate('Login');
        }, 5000);
    }
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
