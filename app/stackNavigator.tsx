import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './homescreen'; // Import your HomeScreen
import AboutPage from './about/index'; // Import the AboutPage

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerTransparent: true, headerTitle: "" }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            headerTransparent: true,
            headerTitle: "",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  console.log("Back button pressed");  // Check if this gets printed
                  navigation.goBack();  // Use goBack() to go to the previous screen
                }}
                style={styles.backButton}
              >
                <Text style={styles.backButtonText}>Back</Text>
              </TouchableOpacity>
            ),
          })}
          name="About"
          component={AboutPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 10,
  },
  backButtonText: {
    color: 'blue', // Customize the color as needed
    fontSize: 16,
  },
});
