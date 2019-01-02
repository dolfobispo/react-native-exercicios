import { Inverter,MegaSena } from './componentes/Multi';
import React,{Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import Simples from './componentes/Simples';
import Parimpar from './componentes/Parimpar'


export default class App extends Component{
   
  render(){
    return (
      <View style={style.container}>
        <Text style={style.fonte}>App!</Text>
        <Simples texto ="Testando..!"></Simples>
        <Parimpar numero = {30}></Parimpar>
        <Inverter text="React Native"></Inverter>
        <MegaSena numeros={6}></MegaSena>
      </View>
    )
  }
}

const style=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  fonte:{
    fontSize:40
  }
})