import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import ListJuz from '../../components/ListJuz';

const Juz = () => {
  const dataJuz = [
    {nomor: 1, surah: 'Al Fatihah', ayat: 1},
    {nomor: 2, surah: 'Al Baqarah', ayat: 142},
    {nomor: 3, surah: 'Al Baqarah', ayat: 253},
    {nomor: 4, surah: 'Al Imran', ayat: 92},
    {nomor: 5, surah: 'An Nisa', ayat: 24},
    {nomor: 6, surah: 'An Nisa', ayat: 148},
    {nomor: 7, surah: "Al Ma'idah", ayat: 83},
    {nomor: 8, surah: "Al An'am", ayat: 111},
    {nomor: 9, surah: "Al A'raf", ayat: 88},
    {nomor: 10, surah: 'Al Anfal', ayat: 41},
    {nomor: 11, surah: 'At Taubah', ayat: 94},
    {nomor: 12, surah: 'Hud', ayat: 6},
    {nomor: 13, surah: 'Yusuf', ayat: 53},
    {nomor: 14, surah: 'Al Hijr', ayat: 2},
    {nomor: 15, surah: 'Al Isra', ayat: 1},
    {nomor: 16, surah: 'Al Kahfi', ayat: 75},
    {nomor: 17, surah: 'Al Anbiya', ayat: 1},
    {nomor: 18, surah: "Al Mu'minun", ayat: 1},
    {nomor: 19, surah: 'Al Furqan', ayat: 21},
    {nomor: 20, surah: 'An Naml', ayat: 60},
    {nomor: 21, surah: 'Al Ankabut', ayat: 45},
    {nomor: 22, surah: 'Al Ahzab', ayat: 31},
    {nomor: 23, surah: 'Yasin', ayat: 22},
    {nomor: 24, surah: 'Az Zumar', ayat: 32},
    {nomor: 25, surah: 'Fussilat', ayat: 47},
    {nomor: 26, surah: 'Al Ahqob', ayat: 1},
    {nomor: 27, surah: 'Az Zariat', ayat: 31},
    {nomor: 28, surah: 'Al Mujadilah', ayat: 1},
    {nomor: 29, surah: 'Al Mulk', ayat: 1},
    {nomor: 30, surah: 'An Naba', ayat: 1},
  ];
  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList data={dataJuz} renderItem={({item}) => ListJuz(item)} />
    </SafeAreaView>
  );
};

export default Juz;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#D8F9E5',
  },
});
