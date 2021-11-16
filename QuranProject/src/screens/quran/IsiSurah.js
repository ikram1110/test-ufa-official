import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';
import HeaderSurah from '../../components/HeaderSurah';
import Header from '../../components/Header';
import ListAyat from '../../components/ListAyat';
import bismillah from '../../../assets/images/bismillah.png';

const IsiSurah = props => {
  const [dataIsiSurah, setDataIsiSurah] = useState([]);
  const [ayahs, setAyahs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const n = props.route.params.number;
    fetch(`https://api.alquran.cloud/v1/surah/${n}/quran-uthmani`)
      .then(response => response.json())
      .then(json => {
        setDataIsiSurah(json.data);
        setAyahs(json.data.ayahs);
        setLoading(true);
      });
  }, []);
  return (
    <SafeAreaView style={styles.wrapper}>
      <Header navigation={props.navigation} />
      {loading == false ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#016241" />
        </View>
      ) : (
        <View>
          <HeaderSurah
            name={dataIsiSurah.englishName}
            translation={dataIsiSurah.englishNameTranslation}
            revelation={dataIsiSurah.revelationType}
            ayahs={dataIsiSurah.numberOfAyahs}
          />
          {dataIsiSurah.number != 1 ? (
            <View style={styles.wrapBismillah}>
              <Image source={bismillah} style={styles.bismillahLogo} />
            </View>
          ) : (
            <></>
          )}
          <ScrollView>
            {ayahs.map(ayah => {
              return (
                <TouchableOpacity
                  key={ayah.number}
                  onPress={() =>
                    props.navigation.navigate('Ayat', {
                      surah: dataIsiSurah.englishName,
                      number: dataIsiSurah.number + ':' + ayah.numberInSurah,
                    })
                  }>
                  <ListAyat item={ayah} numbersurah={dataIsiSurah.number} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default IsiSurah;

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#D8F9E5'},
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapBismillah: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  bismillahLogo: {
    width: 163,
    height: 50,
  },
});
