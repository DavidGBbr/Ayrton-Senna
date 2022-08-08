import React from 'react';
import { ImageBackground, Image, View, Text } from 'react-native';
import styles from './styles';

import imgFundo from '../../assets/fundo.jpg';
import imgCapa from '../../assets/foto-capa.jpg';

export default function TelaInicio() {
 return (
  <ImageBackground 
    source={imgFundo} 
    style={styles.container}
    blurRadius={5}
    >
      <Image source={imgCapa} style={styles.img}/>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Ayrton Senna</Text>
        <Text style={styles.cardDescription}>Através desse APP, você vai conhecer um pouco sobre quem foi esse grande piloto.</Text>
      </View>
  </ImageBackground>
  );
}