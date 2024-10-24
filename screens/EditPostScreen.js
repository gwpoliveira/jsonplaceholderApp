import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const EditPostScreen = ({ route, navigation }) => {
  const { postId } = route.params;  // Recebendo o postId a partir da navegação
  const [post, setPost] = useState({ title: '', body: '' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Buscar o post atual
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        setPost({ title: response.data.title, body: response.data.body });
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Erro ao carregar o post:', error);
        setIsLoading(false);
      });
  }, [postId]);

  const handleSave = () => {
    // Simular envio das alterações para a API
    axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, post)
      .then(response => {
        Alert.alert('Sucesso', 'Post atualizado com sucesso!');
        navigation.goBack();  // Voltar para a tela anterior
      })
      .catch(error => {
        console.error('Erro ao salvar o post:', error);
        Alert.alert('Erro', 'Não foi possível salvar as alterações.');
      });
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título do Post</Text>
      <TextInput
        style={styles.input}
        value={post.title}
        onChangeText={(text) => setPost({ ...post, title: text })}
      />
      <Text style={styles.label}>Conteúdo do Post</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={post.body}
        onChangeText={(text) => setPost({ ...post, body: text })}
        multiline
      />
      <Button title="Salvar Alterações" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EditPostScreen;