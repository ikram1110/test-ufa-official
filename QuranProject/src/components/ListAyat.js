import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import number from '../../assets/images/number.png';

const ListAyat = ({item}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapNumber}>
        <Image source={number} style={styles.iconNumber} />
        <Text style={styles.txtNumber}>{item.numberInSurah}</Text>
      </View>
      <View style={styles.wrapTitle}>
        <Text style={styles.title}>{item.text}</Text>
      </View>
    </View>
  );
};

export default ListAyat;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 20,
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
    fontSize: 18,
    lineHeight: 30,
    textAlign: 'right',
  },
});
