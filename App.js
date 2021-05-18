import React,{Component} from 'react';
import {View,Text,Button,TextInput} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import S1 from './Screen3';
import S2 from './Screen4';

const App=createStackNavigator(
{
  S3:{screen:screen3},
  S4:{screen:screen4},
}
);

export default createAppContainer(App);

// export default class App extends Component
// {
//   show=()=>
//   {

//     alert('Welcome Ishan');
//   }

//   show1=(Num)=>
//   {
//     alert(Num);
//   }


// constructor(props)
// {
//   super(props);
//   this.state={Num1:''};
// }

// F1=()=>
// {
//   var N1=this.state.Num1;
//   alert(N1);
// }

//   render(){
//     return(
//       <View>

//        {/* text component  */}
//           <Text>screen new </Text>
//           <Text style={{backgroundColor:'#ff0000'}}>React</Text>
//           <Text style={{color:'red'}}>Android</Text>
//           <Text style={{fontSize:30}}>PHP</Text>
//           <Text style={{fontWeight:'bold '}}>HTML</Text>
//           <Text style={{fontStyle:'italic'}}>JAVA SCRIPT</Text>
//           <Text style={{textAlign:'center'}}>Welcome</Text>
//           <Text style ={{lineHeight:70}}>Welcome</Text>
//           <Text style={{letterSpacing:20}}>Welcome to React native course</Text>


//           {/* Button component */}
//           <Button title='Button1' onPress={this.show}></Button>

//           <Button title='Button2'onPress={this.show1.bind(this,"Ishan")}></Button>

//         {/* Text Input */}

//         <TextInput style={{borderWidth:1,borderColor:'red',margin:10,borderRadius:10,backgroundColor:'pink',color:'black'}} ></TextInput>
//         {/*Add number of lines */}
//         <TextInput style={{borderWidth:1,borderColor:'red',margin:10,borderRadius:10}} multiline={true} numberOfLines={5}></TextInput>

//         {/* add password field */}
//         <TextInput style={{borderWidth:1,borderColor:'red',margin:10,borderRadius:10}} secureTextEntry={true} ></TextInput> 
//         {/* keyboard type */}
//         <TextInput style={{borderWidth:1,borderColor:'red',margin:10,borderRadius:10}} keyboardType='number-pad' ></TextInput>
//         <TextInput style={{borderWidth:1,borderColor:'red',margin:10,borderRadius:10}} defaultValue='1001' editable={false} ></TextInput>
//         <TextInput style={{borderWidth:1,borderColor:'red',margin:10,borderRadius:10}} maxLength={5} ></TextInput>
//         <TextInput style={{borderWidth:1,borderColor:'red',margin:10,borderRadius:10}} value='same as defaultvalue' ></TextInput>
//         <TextInput style={{borderWidth:1,borderColor:'red',margin:10}} placeholder='Enter your Name'  placeholderTextColor='red'></TextInput>
//         <TextInput style={{borderWidth:1,borderColor:'red',margin:10,borderRadius:10}} defaultValue='1001' ></TextInput>
//         <TextInput style={{borderWidth:1,borderColor:'red',margin:10 }}></TextInput>




// {/* getvalue text input */}

        
//         <TextInput style={{borderWidth:1,margin:10}} onChangeText={Num1=>this.setState({Num1 })} ></TextInput>
//         <Button title="Click Me" style={{margin:10}} onPress={this.F1}></Button>
//       </View>
//     );
//   }
// }
