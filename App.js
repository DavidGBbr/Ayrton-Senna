import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import TelaInicio from './componentes/TelaInicio/';
import TelaSobre from './componentes/TelaSobre/';
import TelaVitorias from './componentes/TelaVitorias/';

const Tabs = createBottomTabNavigator();

export default function App() {
 return (
   <NavigationContainer>
    <Tabs.Navigator>
      <Tabs.Screen name='Início' component={TelaInicio}/>
      <Tabs.Screen name='Sobre' component={TelaSobre}/>
      <Tabs.Screen name='Vitórias' component={TelaVitorias}/>
    </Tabs.Navigator>
   </NavigationContainer>
  );
}