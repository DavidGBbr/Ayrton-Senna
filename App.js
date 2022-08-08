import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


import TelaInicio from './componentes/TelaInicio/';
import TelaSobre from './componentes/TelaSobre/';
import TelaVitorias from './componentes/TelaVitorias/';

const Tabs = createBottomTabNavigator();

export default function App() {
 return (
   <NavigationContainer>
    <Tabs.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'#eecb01',
        },
        headerTitleStyle:{
          color:'#000',
          fontWeight:'bold',
        },

        tabBarStyle:{
          backgroundColor:'#eecb01',
        },
        tabBarLabelStyle:{
          fontSize:16,
        },
        tabBarActiveTintColor:'#ba171',
        tabBarInactiveTintColor:'#000',
        tabBarActiveBackgroundColor:'#fff',
      }}>

      <Tabs.Screen 
        name='Início' 
        component={TelaInicio}
        options={{
          tabBarIcon:({color})=>(
            <Entypo name="home" size={20} color={color}/>
          )
        }}
        />

      <Tabs.Screen 
        name='Sobre' 
        component={TelaSobre}
        options={{
          tabBarIcon:({color})=>(
            <FontAwesome5 name="question-circle" size={20} color={color}/>
          )
        }}
        />

      <Tabs.Screen 
        name='Vitórias' 
        component={TelaVitorias}
        options={{
          tabBarIcon:({color})=>(
            <FontAwesome5 name="trophy" size={20} color={color}/>
          )
        }}/>

    </Tabs.Navigator>
   </NavigationContainer>
  );
}