import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Header from '../../components/Header';
import HeaderAyat from '../../components/HeaderAyat';

const Ayat = props => {
  const [dataAyat, setDataAyat] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const n = props.route.params.number;
    fetch(
      `https://api.alquran.cloud/v1/ayah/${n}/editions/quran-uthmani,id.indonesian,en.pickthall`,
    )
      .then(response => response.json())
      .then(json => {
        setDataAyat(json.data);
        setLoading(true);
      });
  }, []);
  return (
    <SafeAreaView style={styles.wrap}>
      <Header navigation={props.navigation} />
      {loading == false ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#016241" />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <HeaderAyat
            name={props.route.params.surah}
            number={props.route.params.number}
          />
          <ScrollView style={styles.scrlview}>
            {dataAyat.map((ayat, index) => {
              return (
                <View style={styles.wrapper} key={index}>
                  {ayat.edition.language != 'ar' ? (
                    <View>
                      <Text style={styles.title}>
                        {ayat.edition.language == 'id'
                          ? 'Indonesia'
                          : 'Inggris'}
                      </Text>
                      <Text
                        style={
                          ayat.edition.language == 'ar' ? styles.ar : styles.id
                        }>
                        {ayat.text}
                      </Text>
                    </View>
                  ) : (
                    <Text
                      style={
                        ayat.edition.language == 'ar' ? styles.ar : styles.id
                      }>
                      {ayat.numberInSurah == 1
                        ? ayat.text.replace(
                            ayat.text.slice(
                              '\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650 ',
                              39,
                            ),
                            '',
                          )
                        : ayat.text}
                    </Text>
                  )}
                </View>
              );
            })}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Ayat;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#D5D5D5',
  },
  wrap: {flex: 1, backgroundColor: '#D8F9E5'},
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Rosario Regular',
    color: '#787878',
  },
  ar: {
    color: '#252525',
    fontSize: 18,
    lineHeight: 30,
    textAlign: 'right',
  },
  id: {
    color: '#252525',
    fontFamily: 'Rosario Regular',
    fontSize: 16,
  },
  scrlview: {
    flex: 1,
  },
});
