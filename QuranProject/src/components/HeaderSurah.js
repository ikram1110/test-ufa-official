import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import bg1 from '../../assets/images/bg1.png';

const HeaderSurah = ({name, translation, revelation, ayahs}) => {
  return (
    <ImageBackground
      source={bg1}
      resizeMode="cover"
      imageStyle={{borderRadius: 20}}
      style={styles.wrapper}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{translation}</Text>
      <Text style={styles.subsubtitle}>
        {revelation == 'Meccan' ? 'Makkiyah' : 'Madaniyah'} - {ayahs} ayat
      </Text>
    </ImageBackground>
  );
};

export default HeaderSurah;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Rosario SemiBold',
    fontSize: 20,
    marginBottom: 2,
    color: '#FFF',
  },
  subtitle: {
    textAlign: 'center',
    fontFamily: 'Rosario SemiBold',
    fontSize: 14,
    marginBottom: 20,
    color: '#FFF',
  },
  subsubtitle: {
    textAlign: 'center',
    fontFamily: 'Rosario Light',
    fontSize: 12,
    color: '#FFF',
  },
});
