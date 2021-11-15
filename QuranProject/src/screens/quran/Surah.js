import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import ListSurah from '../../components/ListSurah';

const Surah = ({navigation}) => {
  const [dataSurah, setDataSurah] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch('https://api.alquran.cloud/v1/surah')
      .then(response => response.json())
      .then(json => {
        setDataSurah(json.data);
        setLoading(true);
      });
  }, []);
  return (
    <SafeAreaView style={styles.wrapper}>
      {loading == false ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#016241" />
        </View>
      ) : (
        <ScrollView>
          {dataSurah.map(surah => {
            return (
              <TouchableOpacity
                key={surah.number}
                onPress={() =>
                  navigation.navigate('IsiSurah', {number: surah.number})
                }>
                <ListSurah item={surah} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Surah;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#D8F9E5',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
