// app/App.tsx
import React from 'react';
import { SafeAreaView } from 'react-native';
import StackNavigator from './stackNavigator'; // Import the StackNavigator

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StackNavigator />
    </SafeAreaView>
  );
};

export default App;
