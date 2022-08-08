import React from 'react';
import { ScrollView, ImageBackground, Image, View, Text, ViewBase } from 'react-native';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons'; 

import imgCorrida from '../../assets/corrida1.jpg';
import imgVitoria1 from '../../assets/vitoria1.jpg';
import imgVitoria2 from '../../assets/vitoria2.jpg';
import imgVitoria3 from '../../assets/vitoria3.jpg';

export default function TelaVitorias() {
 return (
  <ScrollView>
    <ImageBackground 
      source={imgCorrida} 
      style={styles.container}
      blurRadius={5}
      >

        <View style={styles.numbers}>
          <Text style={styles.title}>Senna em Números</Text>
          <Text style={styles.description}>Ele consquistou três campeonatos mudiais em 1988, 1990 e 1991, e ganhou 41 Grandes Prêmios 
            e 65 pole positions.</Text>

            <View style={styles.box}>
              <FontAwesome5 name="trophy" size={25} color="#ceb105" />
              <Text style={styles.boxNumber}>161</Text>
              <Text style={styles.boxText}>GBS DISPUTADOS</Text>
            </View>
            <View style={styles.box}>
              <FontAwesome5 name="trophy" size={25} color="#ceb105" />
              <Text style={styles.boxNumber}>65</Text>
              <Text style={styles.boxText}>POLE POSITIONS</Text>
            </View>
            <View style={styles.box}>
              <FontAwesome5 name="trophy" size={25} color="#ceb105" />
              <Text style={styles.boxNumber}>41</Text>
              <Text style={styles.boxText}>VITÓRIAS</Text>
            </View>
            <View style={styles.box}>
              <FontAwesome5 name="trophy" size={25} color="#ceb105" />
              <Text style={styles.boxNumber}>3X</Text>
              <Text style={styles.boxText}>CAMPEÃO MUNDIAL</Text>
            </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Campeonato Mundial - 1988</Text>
          <Image source={imgVitoria1} style={styles.cardImg}/>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Campeonato Mundial - 1990</Text>
          <Image source={imgVitoria2} style={styles.cardImg}/>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Campeonato Mundial - 1991</Text>
          <Image source={imgVitoria3} style={styles.cardImg}/>
        </View>

    </ImageBackground>
  </ScrollView>
  );
}