import React from 'react';

import {Text,Button,View,TextInput} from 'react-native';
export default class Screen2 extends Component{
    render(){
        return(
            <View style={{ flex: 1, justifyContent: "center", backgroundColor: 'red' ,padding:10}}>
                <Text style={{fontSize:20}}>Welcome {this.props.navigation.state.params.P1}</Text>
                
                </View> 
        )
    }
}