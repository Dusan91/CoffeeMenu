import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Modal } from 'react-native';
import * as Font from 'expo-font';

// import DSBold from '../../assets/fonts/DancingScript-Bold.ttf';
import { AppLoading } from 'expo';
import {
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  mainView: {
    paddingTop: 30,
  },
  header: {
    fontFamily: 'sans-serif',
    backgroundColor: 'rgba(12, 12, 12, 0.3)',
    margin: 0,
    color: '#fff',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: 70,
    marginTop: 30,
    textShadowColor: '#000',
    textShadowOffset: {
      width: 4,
      height: 3,
    },
    textShadowRadius: 0,
  },
  subHeader: {},
  findWrapper: {
    marginTop: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 300,
    marginVertical: 10,
    marginHorizontal: 0,
    opacity: 1,
  },
  appButtonManualContainer: {
    elevation: 8,
    backgroundColor: '#841584',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 300,
    marginVertical: 10,
    marginHorizontal: 0,
    opacity: 1,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 300,
    marginVertical: 10,
    marginHorizontal: 0,
  },
});
const Home: React.FC = (props) => {
  // const [loaded, error] = Font.useFonts({
  //   DancingScript_Bold: DSBold,
  // });
  const [modalVisible, setModalVisible] = useState(false);
  const findLocation = () => console.log('a');
  const findManualLocation = () => setModalVisible((state) => !state);

  // if (!loaded) {
  //   return <AppLoading />;
  // }
  return (
    <View style={styles.mainView}>
      <Text style={styles.header}>
        Mefy
        {'\n'}
        <Text style={styles.subHeader}>Menu for YOU</Text>
      </Text>
      <View style={styles.findWrapper}>
        <TouchableOpacity
          onPress={findLocation}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Find my location</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={findManualLocation}
          style={styles.appButtonManualContainer}
        >
          <Text style={styles.appButtonText}>Search manual</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
