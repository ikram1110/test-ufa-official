import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Header from '../../components/Header';
import Surah from './Surah';
import Juz from './Juz';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const Quran = ({navigation}) => {
  return (
    <NavigationContainer independent={true}>
      <View style={styles.wrapper}>
        <Header navigation={navigation} buttonType="home" />
        <Tab.Navigator
          initialRouteName="Surah"
          screenOptions={{
            tabBarActiveTintColor: '#222',
            tabBarLabelStyle: {fontSize: 13, color: '#333'},
          }}>
          <Tab.Screen
            name="Surah"
            children={() => {
              return <Surah navigation={navigation} />;
            }}
          />
          <Tab.Screen name="Juz" component={Juz} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default Quran;

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#D8F9E5'},
});
