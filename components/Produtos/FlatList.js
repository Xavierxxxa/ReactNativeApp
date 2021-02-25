import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const produtos=[
    {
        id: '001',
        categora:['geladeira'],
        preco: ['2700'],
        des:['Geladeira Brastemp Branca - Frost Free']
    },
    {
        id: '002',
        categora:['geladeira'],
        preco: ['3000'],
        des: ['Geladeira Eletrolux Cinza - Frost Free']
    },
    {
        id: '003',
        categora:['microondas'],
        preco: ['1200'],
        des: ['Microondas Brastemp Branco']
    },
    {
        id: '004',
        categora:['microondas'],
        preco: ['1000'],
        des: ['Microondas Philco Preto Espelhado']
    },
    {
        id: '005',
        categora:['fogao'],
        preco: ['3500'],
        des: ['Fogão Eletrico Eletrolux']
    },
    {
        id: '006',
        categora:['fogao'],
        preco: ['3000'],
        des: ['Fogão Digital LG']
    },
    {
        id: '007',
        categora:['televisao'],
        preco: ['4000'],
        des: ['TV Samsung 50 polegadas 4k']
    },
    {
        id: '008',
        categora:['televisao'],
        preco: ['5000'],
        des: ['TV Samsung Q-Led 58 Polegadas']
    },
    {
        id: '009',
        categora:['lavaroupa'],
        preco: ['1000'],
        des: ['Lavadoura Brastemp - 10kg']
    },
    {
        id: '010',
        categora:['lavaroupa'],
        preco: ['1200'],
        des: ['Lavadoura LG - 10kg']
    },
]


export default function(){
    return(
        <View>
            <FlatList 
                data={produtos}
                keyExtractor={item => item.id}
                renderItem={({item})=>
                <View style={estilos.item} >
                <Text style={estilos.prod} >{item.des[0]} </Text>
                <Text style={estilos.prod}>Preço: R$ {item.preco[0]}.00</Text>
                </View>} 
            />

        </View>
    )
}

const estilos =  StyleSheet.create({
    item:{
        backgroundColor: '#fff',
        padding: 15,
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 50,
        width: 250,
    },
    prod:{
        textAlign: 'center'
    }
})