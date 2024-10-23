import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const PostDetailScreen = ({ route }) => {
  const { postId } = route.params;
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => setPost(response.data));

    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => setComments(response.data));
  }, [postId]);

  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{post.title}</Text>
      <Text>{post.body}</Text>

      <FlatList
        data={comments}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PostDetailScreen;
