import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import number from '../../assets/images/number.png';

const ListSurah = ({item}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapNumber}>
        <Image source={number} style={styles.iconNumber} />
        <Text style={styles.txtNumber}>{item.number}</Text>
      </View>
      <View style={styles.wrapTitle}>
        <Text style={styles.title}>{item.englishName}</Text>
        <Text style={styles.subTitle}>
          {item.revelationType == 'Meccan' ? 'Makkiyah' : 'Madaniyah'} -{' '}
          {item.numberOfAyahs} ayat
        </Text>
      </View>
      <View style={styles.wrapArab}>
        <Text style={styles.txtArab}>{item.name}</Text>
      </View>
    </View>
  );
};

export default ListSurah;

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
    flex: 4,
  },
  title: {
    color: '#252525',
    fontFamily: 'Rosario SemiBold',
    fontSize: 16,
  },
  subTitle: {
    fontFamily: 'Rosario Regular',
    fontSize: 12,
    color: '#787878',
  },
  wrapArab: {
    flex: 3,
  },
  txtArab: {
    textAlign: 'right',
    color: '#016241',
    fontSize: 18,
  },
});
