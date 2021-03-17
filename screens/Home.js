import React from 'react'
import {View, Text, Button} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            item: ''
        }
    }

     handleOnButton = async () =>{
        let value = "Amit"
        try {
            await AsyncStorage.setItem('@storage_Key', value)
            this.setState({
                item: value
            })
          } catch (e) {
            console.log(e)
          }
    }

    deleteButton = async () =>{
        try{
            AsyncStorage.removeItem('@storage_Key', async ()=>{
                console.log("deleted")
                this.setState({
                    item: await AsyncStorage.getItem('@storage_Key')
                })
                console.log(this.state.item)
            });
        }catch(e){
            console.log(e)
        }
        
    }
    render(){
        return(
            <View>
                <Text>{this.state.item}</Text>
                <Button title='Store it' onPress={this.handleOnButton}/>
                <Button title='Delete it' onPress={this.deleteButton}/>
            </View>
        )
    }
}