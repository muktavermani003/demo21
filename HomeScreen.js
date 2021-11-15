import React from 'react';

import {Text,Button,View,TextInput} from 'react-native';
export default class Screen1 extends Component{
    constructor(props){
        super(props)
        this.state={username:""}
    }
    render(){
        return(
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'red' }}>
            <Text>Welcome to login Screen</Text>
            <TextInput
            placeholder="Enter user name"
            style={{borderBottomWidth:1,borderBottomColor:"#000000",marginBottom:20}}
            onChangeText={username=>this.setState({username})}
            />
            <Button title="Login" 
            onPress={()=>this.props.navigation.navigate("Screen2",{P1:this.state.username})}/>
          </View>  
        )
    }
}