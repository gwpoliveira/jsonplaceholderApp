import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body.substring(0, 100)}...</Text>

      <View style={styles.buttonContainer}>
        {/* Ícone de Mais Detalhes */}
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('PostDetail', { postId: item.id })}>
          <Icon name="description" size={24} color="#4CAF50" />
        </TouchableOpacity>

        {/* Ícone de Ver Usuário */}
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('UserDetail', { userId: item.userId })}>
          <Icon name="person" size={24} color="#2196F3" />
        </TouchableOpacity>

        {/* Ícone de Editar */}
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('EditPost', { postId: item.id })}>
          <Icon name="edit" size={24} color="#FFA500" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default PostsScreen;
