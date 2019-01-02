import { Inverter,MegaSena } from './componentes/Multi';
import React,{Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import Simples from './componentes/Simples';
import Parimpar from './componentes/Parimpar'
import {createDrawerNavigator} from 'react-navigation'
import Contador from './componentes/Contador'
import Plataforma from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import TextoSincronizado from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'
export default createDrawerNavigator({
    Flex:{
        screen:Flex
    },
    ListaFlex:{
    screen:ListaFlex,
    navigationOptions:{title: 'Lista Flex (Box)'}
    },
    TextoSincronizado:{
        screen:()=><TextoSincronizado></TextoSincronizado>,
        navigationOptions:{title: 'Texto Sincronizado'}
    },
    Evento:{
        screen:()=><Evento></Evento>
    },
    ValidarProps:{
        screen:()=><ValidarProps ano={18}></ValidarProps>
    },
    Plataformas:{
        screen:()=><Plataforma></Plataforma>
    },
    Contador:{
        screen:()=><Contador numero={4}></Contador>
    },
    MegaSena:{
        screen:()=><MegaSena numeros={8}></MegaSena>,
        navigationOptions:{title: 'Mega Sena'}
    },
    Inverter:{
        screen:()=><Inverter texto="React Native!!"></Inverter>
    },
    Parimpar:{
        screen:()=> <Parimpar numero ={30}></Parimpar>,
        navigationOptions:{title: 'Par e Impar'}
    },
    Simples:{
        screen:()=><Simples texto="Flexível"></Simples>
    }

},{drawerWidth:300})
