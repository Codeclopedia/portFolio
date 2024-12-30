import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';

export default function AboutPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.name}>Chetan Joshi</Text>
      <Text style={styles.title}>Software Developer</Text>

      <Text style={styles.description}>
        Hi, I'm Chetan Joshi, a Software Developer with around 4 years of experience working on various exciting projects. 
        I specialize in designing and building applications using modern technologies.
      </Text>

      <Text style={styles.subTitle}>Tech Stacks I Know:</Text>
      <Text style={styles.techStacks}>
        Flutter, React Native, React, TypeScript, Next.js, Node.js, Express, and more. Currently, I'm always learning and exploring new technologies to improve my skills further.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center', // Center align content horizontally
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Make it circular
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: '#666',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  techStacks: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
  },
});
