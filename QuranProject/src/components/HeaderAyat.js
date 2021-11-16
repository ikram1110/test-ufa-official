import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import bg1 from '../../assets/images/bg1.png';

const HeaderAyat = ({name, number}) => {
  return (
    <ImageBackground
      source={bg1}
      resizeMode="cover"
      imageStyle={{borderRadius: 20}}
      style={styles.wrapper}>
      <Text style={styles.title}>
        {name} {number}
      </Text>
    </ImageBackground>
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
