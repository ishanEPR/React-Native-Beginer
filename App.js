import React,{Component} from 'react';
import {View,Text,Button,TextInput} from 'react-native';

export default class App extends Component
{
  show=()=>
  {

    alert('Welcome Ishan');
  }

  show1=(Num)=>
  {
    alert(Num);
  }
  render(){
    return(
      <View>

       {/* text component  */}
          <Text>screen new </Text>
          <Text style={{backgroundColor:'#ff0000'}}>React</Text>
          <Text style={{color:'red'}}>Android</Text>
          <Text style={{fontSize:30}}>PHP</Text>
          <Text style={{fontWeight:'bold '}}>HTML</Text>
          <Text style={{fontStyle:'italic'}}>JAVA SCRIPT</Text>
          <Text style={{textAlign:'center'}}>Welcome</Text>
          <Text style ={{lineHeight:70}}>Welcome</Text>
          <Text style={{letterSpacing:20}}>Welcome to React native course</Text>


          {/* Button component */}
          <Button title='Button1' onPress={this.show}></Button>

          <Button title='Button2'onPress={this.show1.bind(this,"Ishan")}></Button>

        {/* Text Input */}

        <TextInput style={{borderWidth:1,borderColor:'red',margin:10,borderRadius:10,backgroundColor:'pink',color:'black'}} ></TextInput>
        {/*Add number of lines */}
        <TextInput style={{borderWidth:1,borderColor:'red',margin:10,borderRadius:10}} multiline={true} numberOfLines={5}></TextInput>

        {/* add password field */}
        <TextInput style={{borderWidth:1,borderColor:'red',margin:10,borderRadius:10}} secureTextEntry={true} ></TextInput> 
        {/* keyboard type */}
        <TextInput style={{borderWidth:1,borderColor:'red',margin:10,borderRadius:10}} keyboardType='number-pad' ></TextInput>
        <TextInput style={{borderWidth:1,borderColor:'red',margin:10,borderRadius:10}} defaultValue='1001' editable={false} ></TextInput>
        <TextInput style={{borderWidth:1,borderColor:'red',margin:10,borderRadius:10}} maxLength={5} ></TextInput>
        <TextInput style={{borderWidth:1,borderColor:'red',margin:10,borderRadius:10}} value='same as defaultvalue' ></TextInput>
        <TextInput style={{borderWidth:1,borderColor:'red',margin:10}} placeholder='Enter your Name'  placeholderTextColor='red'></TextInput>
        <TextInput style={{borderWidth:1,borderColor:'red',margin:10,borderRadius:10}} defaultValue='1001' ></TextInput>
        <TextInput style={{borderWidth:1,borderColor:'red',margin:10 }}></TextInput>

      </View>
    );
  }
}

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
