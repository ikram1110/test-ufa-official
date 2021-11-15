import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';
import Quran from './screens/quran';
import IsiSurah from './screens/quran/IsiSurah';
import Ayat from './screens/quran/Ayat';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Quran" component={Quran} />
        <Stack.Screen name="IsiSurah" component={IsiSurah} />
        <Stack.Screen name="Ayat" component={Ayat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
