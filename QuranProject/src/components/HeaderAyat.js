import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const HeaderAyat = ({name, number}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>
        {name} {number}
      </Text>
    </View>
  );
};

export default HeaderAyat;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#64B686',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    fontFamily: 'Rosario SemiBold',
    textAlign: 'center',
    fontSize: 16,
    color: '#FFF',
  },
});
