import React from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';

import Widget from './src/components/Widget';
import {theme} from './src/theme';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}>
      <Widget />
    </View>
  );
}
