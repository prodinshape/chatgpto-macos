/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import reloadimage from './images/reload-icon.png';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ChatGptWebview from './components/ChatGptWebview';
import {Circle} from 'react-native-svg';
import SvgUri from 'react-native-svg-uri';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (reload) {
      setReload(false);
    }
  }, [reload]);

  const clickOnReload = () => {
    setReload(true);
  };

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      {!reload && <ChatGptWebview />}
      <View style={{position: 'absolute', bottom: 140, right: 30}}>
        {/* <Button onPress={() => clickOnReload()} title="reload" /> */}
        <TouchableOpacity onPress={() => clickOnReload()}>
          <Image source={reloadimage} style={{width: 30, height: 30}}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;
