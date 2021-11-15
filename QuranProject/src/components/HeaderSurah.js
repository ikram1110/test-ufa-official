import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const HeaderSurah = ({name, translation, revelation, ayahs}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{translation}</Text>
      <Text style={styles.subsubtitle}>
        {revelation == 'Meccan' ? 'Makkiyah' : 'Madaniyah'} - {ayahs} ayat
      </Text>
    </View>
  );
};

export default HeaderSurah;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#64B686',
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
