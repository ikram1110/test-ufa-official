import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import home from '../../assets/images/home.png';
import back from '../../assets/images/back.png';

const Header = ({navigation, buttonType}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.wrapIcon}
        onPress={() =>
          buttonType == 'home' ? navigation.popToTop() : navigation.goBack()
        }>
        <Image
          source={buttonType == 'home' ? home : back}
          style={styles.icon}
        />
      </TouchableOpacity>
      <View style={styles.wrapTitle}>
        <Text style={styles.title}>Quranku</Text>
      </View>
      <View style={styles.wrapIcon}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 10,
  },
  wrapIcon: {
    flex: 1,
  },
  icon: {
    width: 28,
    height: 28,
  },
  wrapTitle: {
    flex: 6,
  },
  title: {
    fontFamily: 'Rosario Bold',
    textAlign: 'center',
    color: '#016241',
    fontSize: 24,
  },
});
