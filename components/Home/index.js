import React from 'react';
import {Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import styles from './styles'
import Logo from '../../assets/Compras.png'

export default function Home(props){
    const {navigation} = props;
    return (
        <SafeAreaView 
        style={styles.safe}
        >
            <Text style={styles.text} >FullStack Eletro</Text>
            <Image source={Logo} style={styles.img}/>

            <TouchableOpacity style={styles.btn}
            title='Ir para Sobre' onPress={()=>
                navigation.navigate('Login')
            }>
                <Text> Login </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}
            title='Ir para Produtos' onPress={()=>
                navigation.navigate('Produtos')
            }>
                <Text>Produtos</Text>
            </TouchableOpacity>

            <Text style={styles.text}>Boas vindas, desenvolvedores possuem descontos especiais na loja!</Text>

        </SafeAreaView>
    )
}