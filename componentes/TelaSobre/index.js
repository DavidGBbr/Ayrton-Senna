import React from 'react';
import { ScrollView, Image, View, Text} from 'react-native';
import styles from './styles';

import imgCapa from '../../assets/foto-capa.jpg';
import imgPreparacao from '../../assets/preparacao.png';
import imgChuva from '../../assets/rei-de-chuva.png';
import imgSilvastone from '../../assets/silvastone.png';
import imgMonaco from '../../assets/rei-da-monaco.png';

export default function TelaSobre() {
 return (
  <View style={styles.container}>
    <View style={styles.boxTitle}>
        <Text style={styles.title}>Ayrton Senna</Text>
        <Image source={imgCapa} style={styles.img}/>
        <Text style={styles.description}>No esporte mais global e veloz do mundo, um piloto é considerado o mais rápido de todos os tempos:Ayrton Senna.
        Seus expressivos números ajudam a explicar porque o piloto ganhou status de mito do esporte. Mas Senna é mais do que isso:
        o brasileiro foi o responsável por alguns dos momentos mais mágicos da principal categoria de automobilismo mundial.
        </Text>
    </View>

    <ScrollView>

      <View style={styles.box}>
        <Image source={imgChuva} style={styles.boxImg}/>
        <View style={styles.boxTexts}>
          <Text style={styles.boxTitle}>Rei da chuva</Text>
          <Text>Aprimorou a pilotagem no asfalto molhando e mostrou ser um piloto de determinação, garra e persistência.</Text>
        </View>
      </View>

      <View style={styles.box}>
        <Image source={imgMonaco} style={styles.boxImg}/>
        <View style={styles.boxTexts}>
          <Text style={styles.boxTitle}>Rei da Mônaco</Text>
          <Text>Conquistou o posto por ser o maior recordista de vitórias, com seis conquistas.</Text>
        </View>
      </View>

      <View style={styles.box}>
        <Image source={imgSilvastone} style={styles.boxImg}/>
        <View style={styles.boxTexts}>
          <Text style={styles.boxTitle}>Silvastone</Text>
          <Text>Por seu currículo impressionante em Silverstone, Ayrton recebeu o apelido de 'Silvastone' pela imprensa inglesa.</Text>
        </View>
      </View>

      <View style={styles.box}>
        <Image source={imgPreparacao} style={styles.boxImg}/>
        <View style={styles.boxTexts}>
          <Text style={styles.boxTitle}>Preparação</Text>
          <Text>Para vencer corridas e campeonatos o piloto precisava ter uma preparação física de atleta.</Text>
        </View>
      </View>

  </ScrollView>
  
  </View>

  );
}