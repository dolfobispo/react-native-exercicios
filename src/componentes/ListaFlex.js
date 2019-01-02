import React from 'react'
import {ScrollView,View,Text,FlatList} from 'react-native'
const alunos = [{id:'1',nome:'João', nota:7.9},
{id:'2',nome:'Maria', nota:9},
{id:'3',nome:'Ricardo', nota:10},
{id:'4',nome:'carol', nota:6.2},
{id:'5',nome:'Barbara', nota:5.4},
{id:'6',nome:'Indira', nota:8.7},
{id:'7',nome:'Rodolfo', nota:6.0},
{id:'8',nome:'Caio', nota:8.0},
{id:'9',nome:'Alex', nota:7.5},
{id:'10',nome:'Maria', nota:9},
{id:'11',nome:'Ricardo', nota:10},
{id:'12',nome:'carol', nota:6.2},
{id:'13',nome:'Barbara', nota:5.4},
{id:'14',nome:'Indira', nota:8.7},
{id:'15',nome:'Rodolfo', nota:6.0},
{id:'16',nome:'Caio', nota:8.0},
{id:'17',nome:'Alex', nota:7.5},
{id:'18',nome:'Marcos', nota:7.5},

    ]
const   itemEstilo={
    paddingHorizontal:15,
    height:70,
    backgroundColor:'#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row'
}

export const Aluno=props=> <View style={itemEstilo}>
    <Text>Nome: {props.nome}</Text>
    <Text style={{fontWeight:'bold'}}>Nota: {props.nota}</Text>
</View>

export default props=>{
    const renderItem=({item})=>{
        return <Aluno {...item}></Aluno>
        }
    return (<ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
            keyExtractor={(_,index)=>index.toString()}>
            </FlatList>
        </ScrollView>)
}