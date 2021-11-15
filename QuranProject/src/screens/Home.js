import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import logo from '../../assets/images/logo.png';
import lentera from '../../assets/images/lentera.png';
import quran from '../../assets/images/quran.png';
import search from '../../assets/images/search.png';
import sujud from '../../assets/images/sujud.png';
import bookmark from '../../assets/images/bookmark.png';
import bg1 from '../../assets/images/bg1.png';
import bg2 from '../../assets/images/bg2.png';
import bg3 from '../../assets/images/bg3.png';
import bg4 from '../../assets/images/bg4.png';
import bg5 from '../../assets/images/bg5.png';

const Home = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <View style={{marginTop: 40, marginBottom: 30}}>
        <Image source={logo} style={styles.logo} />
      </View>
      <ImageBackground
        source={bg1}
        resizeMode="cover"
        imageStyle={{borderRadius: 20}}
        style={[styles.lastRead, styles.boxMenu]}>
        <View style={{flex: 3}}>
          <Text style={styles.h3}>Last Read</Text>
          <Text style={styles.h1}>Ar Rahman</Text>
          <Text style={styles.h2}>Ayah : 52</Text>
          <Text style={styles.h3}>Go to {'>'}</Text>
        </View>
        <Image
          source={lentera}
          style={{width: 50, height: 79, resizeMode: 'contain', flex: 1}}
        />
      </ImageBackground>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 1, marginRight: 10}}>
          <TouchableOpacity onPress={() => navigation.navigate('Quran')}>
            <ImageBackground
              source={bg2}
              resizeMode="cover"
              imageStyle={{borderRadius: 20}}
              style={[styles.boxMenu, styles.hbox1]}>
              <Image
                source={quran}
                style={{width: 50, height: 79, resizeMode: 'contain'}}
              />
              <Text style={styles.h2}>Quran</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground
              source={bg3}
              resizeMode="cover"
              imageStyle={{borderRadius: 20}}
              style={[styles.boxMenu, styles.hbox2]}>
              <Image
                source={sujud}
                style={{width: 50, height: 79, resizeMode: 'contain'}}
              />
              <Text style={styles.h2}>Sajdah</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, marginLeft: 10}}>
          <TouchableOpacity>
            <ImageBackground
              source={bg4}
              resizeMode="cover"
              imageStyle={{borderRadius: 20}}
              style={[styles.boxMenu, styles.hbox2]}>
              <Image
                source={search}
                style={{width: 50, height: 79, resizeMode: 'contain'}}
              />
              <Text style={styles.h2}>Search</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground
              source={bg5}
              resizeMode="cover"
              imageStyle={{borderRadius: 20}}
              style={[styles.boxMenu, styles.hbox1]}>
              <Image
                source={bookmark}
                style={{width: 50, height: 79, resizeMode: 'contain'}}
              />
              <Text style={styles.h2}>Bookmark</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#D8F9E5',
    alignItems: 'center',
    height: '100%',
    padding: 16,
  },
  logo: {
    width: 115,
    height: 80,
  },
  lastRead: {
    flexDirection: 'row',
    backgroundColor: '#64B686',
  },
  boxMenu: {
    backgroundColor: '#64B686',
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
  },
  hbox1: {
    height: 190,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  hbox2: {
    height: 160,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  h1: {
    fontFamily: 'Rosario SemiBold',
    fontSize: 24,
  },
  h2: {
    fontFamily: 'Rosario Regular',
    fontSize: 18,
  },
  h3: {
    fontFamily: 'Rosario Light',
    fontSize: 12,
  },
});
