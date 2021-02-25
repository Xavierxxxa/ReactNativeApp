import React  from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Produtos from './components/Produtos/index';

const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen 
      name="Home"
      component ={Home}
      option= {{title: 'Home'}}
      />
      
      <Stack.Screen 
      name="Sobre"
      component ={Sobre}
      option= {{title: 'Sobre'}}
      />

      <Stack.Screen
      name="Produtos"
      component={Produtos}
      options={{title: 'Produtos'}}
      />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

