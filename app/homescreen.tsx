import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import { useFonts, Satisfy_400Regular, MontserratAlternates_400Regular } from '@expo-google-fonts/dev';
import AppLoading from 'expo-app-loading';

const { height, width } = Dimensions.get('window');

// Sample data for the list
const data = [
  { id: '1', text: 'Home' },
  { id: '2', text: 'About' },
  { id: '3', text: 'Journey' },
  { id: '4', text: 'Projects' },
  { id: '5', text: 'Contact' },
];

// Utility to simulate typing effect
const useTypingEffect = (text: string, delay = 150) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let typingIndex = 0;

    const intervalId = setInterval(() => {
      if (typingIndex < text.length) {
        setTypedText((prev) => prev + text[typingIndex]);
        typingIndex += 1;
      } else {
        clearInterval(intervalId); // Stop the interval once the text is fully typed
      }
    }, delay);

    return () => {
      clearInterval(intervalId); // Cleanup interval on unmount or rerender
    };
  }, [text, delay]);

  return typedText;
};

export default function HomeScreen({ navigation }: any) {
  const fullText = "Hi I'm Chetan Joshi";
  const softwareEngineerText = "Software Engineer";

  let [fontsLoaded] = useFonts({ Satisfy_400Regular, MontserratAlternates_400Regular })

  // Use typing effect for full text
  const typedText = useTypingEffect(fullText, 150);
  const [showSoftwareEngineer, setShowSoftwareEngineer] = useState(false);

  useEffect(() => {
    if (typedText === fullText) {
      setTimeout(() => {
        setShowSoftwareEngineer(true); // Show "Software Engineer" after delay
      }, 500);
    }
  }, [typedText]);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.box}
      key={item.id}
      onPress={() => {
        if (item.text === 'About') {
          navigation.navigate('About'); // Navigate to the About screen
        }
      }}
    >
      <Text style={styles.boxText}>{item.text}</Text>
    </TouchableOpacity>
  );

  if (fontsLoaded) {
    return (
      <LinearGradient colors={['#111428', '#000000']} style={styles.background} dither={true} locations={[0.2, 0.8]}>
        <View style={styles.container}>

          {/* List of Boxes */}
          <View style={styles.boxContainer}>
            {data.map((item) => (
              renderItem({ item })
            ))}
          </View>

          <Text style={styles.typedText}>{typedText}</Text>

          {showSoftwareEngineer && (
            <>
              <Text style={styles.encodedText}>
                aka
                <TouchableOpacity onPress={() => alert('Encoded link clicked')}>
                  <Text style={styles.link}>Encoded</Text>
                </TouchableOpacity>
              </Text>

              <Text style={styles.softwareEngineerText}>{softwareEngineerText}</Text>
            </>
          )}


          {/* Spacer */}
          <View style={{ flex: 1 }} />
          <LottieView
            source={require("../assets/lottie/developer.json")}
            autoPlay
            loop={true} // Continuous background animation
            style={styles.lottieBackground}
          />
        </View>

      </LinearGradient>
    );
  }
  return <AppLoading />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items from the top
    alignItems: 'center', // Center content horizontally
    padding: 10,
  },
  background: {
    flex: 1,
  },
  lottieBackground: {
    padding: 0,
    width: width,
    height: 400,
    marginBottom: 20,
  },
  boxList: {
    marginTop: 20,
    width: '100%',
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow boxes to wrap to the next line
    justifyContent: 'flex-start', // Center the boxes in each row
    marginVertical: 20,
  },
  box: {
    backgroundColor: 'transparent', // Transparent background
    borderColor: 'white', // White border
    borderWidth: 1, // Border thickness
    borderRadius: 8, // Rounded corners
    padding: 10, // Spacing inside the box
    margin: 5, // Space between boxes
    alignItems: 'center', // Center content horizontally
    alignSelf: 'flex-start', // Adjust width to fit content
  },
  boxText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  typedText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Courier',
    textAlign: 'left',
    marginBottom: 20,
  },
  encodedText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 10,
  },
  link: {
    color: '#00f',
    textDecorationLine: 'underline',
  },
  softwareEngineerText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
});
