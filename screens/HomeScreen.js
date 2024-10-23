import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>JSONPlaceholder App</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Ver Posts"
          onPress={() => navigation.navigate('Posts')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Ver Álbuns"
          onPress={() => navigation.navigate('Albums')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Ver Usuários"
          onPress={() => navigation.navigate('Users')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});

export default HomeScreen;
