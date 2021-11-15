import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import number from '../../assets/images/number.png';

const ListJuz = item => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.wrapNumber}>
        <Image source={number} style={styles.iconNumber} />
        <Text style={styles.txtNumber}>{item.nomor}</Text>
      </View>
      <View style={styles.wrapTitle}>
        <Text style={styles.title}>Juz {item.nomor}</Text>
        <Text style={styles.subTitle}>
          Mulai {item.surah} ayat {item.ayat}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListJuz;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D5D5D5',
  },
  wrapNumber: {
    flex: 1,
    position: 'relative',
  },
  iconNumber: {
    width: 38,
    height: 38,
    alignSelf: 'center',
  },
  txtNumber: {
    color: '#016241',
    position: 'absolute',
    alignSelf: 'center',
    top: 7,
    fontFamily: 'Rosario Light',
    fontSize: 12,
  },
  wrapTitle: {
    paddingLeft: 8,
    flex: 7,
  },
  title: {
    color: '#252525',
    fontFamily: 'Rosario SemiBold',
    fontSize: 18,
  },
  subTitle: {
    fontFamily: 'Rosario Regular',
    fontSize: 12,
    color: '#787878',
  },
});
