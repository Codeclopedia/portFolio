import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#111428', '#000000']} // Grey to Black
        style={styles.background}
        dither={true}
        locations={[0.2,0.8]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
});

export default App;
