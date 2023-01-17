import React, {Component, ReactElement} from 'react';
import {WebView} from 'react-native-webview';

const ChatGptWebview = (): ReactElement => {
  return (
    <WebView
      source={{uri: 'https://chat.openai.com/'}}
      originWhitelist={['https://*', 'http://*', 'file://*', 'sms://*']}
    />
  );
};

export default ChatGptWebview;
